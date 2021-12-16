import React, { useState, useEffect } from 'react'
import store from '../../../redux/store'
import { Image, SwipeCell, Button, Flex, Typography, Cell, Field } from 'react-vant'
import Img from '../../../assets/img/typeList/sort_bangong.png'
import * as BillDetailsAPI from '../../../api/BillDetails/BillDetailsAPI'

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

    await setList(res.daylist)

    console.log(res)
  }, [])

  return (
    <>
      <Field
        readonly
        clickable
        label="日期"
        value={fieldValue}
        placeholder="选择显示账单日期"
        onClick={() => setShowPicker(true)}
      />

      {
        list.map((item) => {
          return <>{
            item.list.map((itm) => {
              console.log(itm)
              const charastic = itm.income === true ? '+' : '-'
              return <SwipeCell
                rightAction={
                  <Button 
                    square type="danger"
                    onClick={() => {console.log(123)}}
                  >删除</Button>
                }
              >      
                <Cell title={itm.sort.sortName} icon="location-o" key={itm.id} value={`${charastic}${itm.cost}￥`}/>
              </SwipeCell>
            })
          }</>
        })
      }
    </>
  )
}