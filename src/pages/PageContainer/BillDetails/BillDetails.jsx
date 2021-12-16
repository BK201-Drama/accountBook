import React, { useState, useEffect } from 'react'
import store from '../../../redux/store'
import { Image, SwipeCell, Button, Cell, Field, Popup, DatetimePicker, Empty } from 'react-vant'
import timeTranslate from '../../../utils/timeTranslate'
import yearMonth from '../../../utils/year-month'
// import Img from '../../../assets/img/typeList/sort_bangong.png'

import * as BillDetailsAPI from '../../../api/BillDetails/BillDetailsAPI'
import * as BookingAPI from '../../../api/Booking/BookingAPI'

export default function BillDetails () {
  
  var k = store.getState()
  console.log(k)

  const [list, setList] = useState([])
  const [date, newDate] = useState(new Date())

  const [fieldValue, setFieldValue] = useState(new Date())
  const [showPicker, setShowPicker] = useState(false)

  useEffect(async () => {
    const year = date.getFullYear()
    const month = date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1
    const res = await BillDetailsAPI.categorizeByDay({
      userId: k.id,
      Year: year,
      Month: month
    })

    if (res.daylist !== undefined) {
      await setList(res.daylist)
    } else {
      await setList([])
    }
  }, [])

  useEffect(async () => {
    const year = fieldValue.getFullYear()
    const month = fieldValue.getMonth() + 1 < 10 ? '0' + (fieldValue.getMonth() + 1) : fieldValue.getMonth() + 1
    const res = await BillDetailsAPI.categorizeByDay({
      userId: k.id,
      Year: year,
      Month: month
    })

    // await setList(res.daylist)
    console.log('res.dayList', res.daylist)
    if (res.status !== 200) {
      await setList(res.daylist)
    } else {
      await setList([])
    }

    console.log(res)
  }, [fieldValue])

  return (
    <>
      <Field
        readonly
        clickable
        label="日期"
        value={yearMonth(fieldValue)}
        placeholder="选择显示账单日期"
        onClick={() => setShowPicker(true)}
      />

      {
        list.length === 0 ? 
        <Empty description="本月没有账单记录噢"/> : 
        list.map((item) => {
          return <>{
            item.list.map((itm) => {
              console.log(itm)
              const charastic = itm.income === true ? '+' : '-'
              return <SwipeCell
                rightAction={
                  <Button 
                    style={{ height: '100%' }}
                    square type="danger"
                    onClick={async () => {
                      const res = BookingAPI.deleteBook(itm.id)

                      if (res.status === 100) {
                        console.log(res)
                      }

                      const year = date.getFullYear()
                      const month = date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1
                      const resq = await BillDetailsAPI.categorizeByDay({
                        userId: k.id,
                        Year: year,
                        Month: month
                      })
                      await setList(resq.daylist)
                    }}
                  >删除</Button>
                }
              >      
                <Cell 
                  title={itm.sort.sortName} 
                  icon="location-o" 
                  key={itm.id} 
                  value={`${charastic}${itm.cost}￥`}
                  label={`${timeTranslate(Date(itm.crdate))}`}
                />
              </SwipeCell>
            })
          }</>
        })
      }

        <Popup
          title="请选择日期"
          closeable
          visible={showPicker}
          round
          position="bottom"
          onClose={() => setShowPicker(false)}
        >
          <DatetimePicker
            showSubmitBtn
            onConfirm={async (value) => {
              await setFieldValue(value)
              await setShowPicker(false)
            }}
            type="year-month"
            minDate={new Date(2018, 1, 1)}
            maxDate={new Date(2024, 2, 1)}
            value={fieldValue}
          />
        </Popup>
    </>
  )
}