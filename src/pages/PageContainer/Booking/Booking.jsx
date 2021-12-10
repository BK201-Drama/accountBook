import React, { useEffect, useState } from 'react'
import { Icon, Tabs, Grid, NumberKeyboard, Image, Field, DatetimePicker, Dialog, Toast } from 'react-vant'
import * as BookingAPI from '../../../api/Booking/BookingAPI'
import store from '../../../redux/store'
import transPic from '../../../utils/transPic'

export default function Booking () {

  // 登录信息
  const res = store.getState()

  // 存储记账类型，为支出还是收入
  const [tab, setTab] = useState(false)

  // 存储选择了哪一条数据
  const [selectedItem, setSelectedItem] = useState()

  // console.log(res)

  // 存储支出和收入的数据
  const [listOut, setListOut] = useState([])
  const [listIn, setListIn] = useState([])

  // 存储控制Popup弹出的数据
  const [popup, setPopup] = useState(false)

  useEffect(async () => {
    var dat = await BookingAPI.getList(res.id)
    await setListOut(dat.outSortlis)
    await setListIn(dat.inSortlis)
  }, [])

  // 控制数字键盘
  const [keyBoardVisible, setKeyBoardVisible] = useState(false)
  const [costValue, setCostValue] = useState('0.00')

  // 控制时间选择器
  const [time, setTime] = useState()

  return (
    <>
      <Tabs active="active"
        onChange={(v) => {
          if (v === 0) {
            setTab(false)
          } else {
            setTab(true)
          }
        }}
      >
        <Tabs.TabPane title="支出">
          <Grid border={false} columnNum={5}>
            {
              listOut.map((item) => {
                const name_ = `${item.sortName}`
                const src_ = `http://106.55.188.184:8080/ssmBillBook/upload/typeList/${transPic(item.sortImg)}`
                
                return <Grid.Item
                  text={name_}
                  key={name_}
                  // 图片最好只要50px的
                  icon={<Image src={src_}/>}
                  onClick={async () => {
                    console.log(item)
                    setSelectedItem(item)
                    setKeyBoardVisible(true)
                  }}
                  // hideOnClickOutside={true}
                />
              })
            }
          </Grid>

        </Tabs.TabPane>

        <Tabs.TabPane title="收入">
          
        <Grid border={false} columnNum={5}>
          {
            listIn.map((item) => {
              const name_ = `${item.sortName}`
              const src_ = `http://106.55.188.184:8080/ssmBillBook/upload/typeList/${transPic(item.sortImg)}`

              return <Grid.Item 
                text={name_} 
                key={name_}
                icon={<Image src={src_}/>}
                
                onClick={async () => {
                  console.log(item)
                  setSelectedItem(item)
                  setKeyBoardVisible(true)
                }}
              />
            })
          }
        </Grid>

        </Tabs.TabPane>
      </Tabs>

      {/* 数字键盘 */}
      <NumberKeyboard 
        title={<Field label="" readonly value={costValue}/>}
        value={costValue}
        theme="custom"
        extraKey={['.', <Icon name="calendar-o"/>]}
        closeButtonText="完成"
        visible={keyBoardVisible}
        onInput={async (v) => {

          if(typeof v !== 'string' && typeof v !== 'number') {
            console.log('你是日历')
            const tmp = costValue
            await setPopup(true)
            await setKeyBoardVisible(false)

            // 避免日历对象也被放进输入框
            await setCostValue(tmp)
          } else {
            console.log(v)
          }
        }}
        onClose={async () => {
          console.log(time)
          console.log(typeof res.id, res.id)
          const re = await BookingAPI.addBook({
            userId: res.id,
            sortid: selectedItem.id,
            payid: 1,
            cost: parseFloat(costValue),
            crdate: '2021-1-1%2020:58:23',
            content: 'none',
            income: tab
          })

          if(re !== null) {
            Toast.success({
              message: '添加成功',
              duration: 1000
            })
          }
        }}
        onChange={setCostValue}
        onBlur={async () => {
          setKeyBoardVisible(false)
        }}
      />

      {/* 时间选择框 */}
      <Dialog
        // closeable
        title="请选择日期"
        round
        visible={popup}
        showCancelButton={false}
        showConfirmButton={false}
      >
        <DatetimePicker
          type="date"
          minDate={new Date(2010, 0, 1)}
          maxDate={new Date(2024, 10, 1)}
          value={time}
          onCancel={async () => {
            await setPopup(false)
            await setKeyBoardVisible(true)
          }}
          onConfirm={async (value) => {
            await setTime(value)
            await setKeyBoardVisible(true)
            await setPopup(false)
          }}
        />
      </Dialog>
    </>
  )
}
