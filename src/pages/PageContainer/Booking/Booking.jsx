import React, { useEffect, useState } from 'react'
import { Icon, Tabs, Grid, NumberKeyboard, Image, Field } from 'react-vant'
import * as BookingAPI from '../../../api/Booking/BookingAPI'
import store from '../../../redux/store'
import transPic from '../../../utils/transPic'

export default function Booking () {

  const res = store.getState()

  const [selectedItem, setSelectedItem] = useState()

  // console.log(res)

  const [listOut, setListOut] = useState([])
  const [listIn, setListIn] = useState([])

  useEffect(async () => {
    var dat = await BookingAPI.getList(res.id)
    await setListOut(dat.outSortlis)
    await setListIn(dat.inSortlis)
  }, [])

  const [keyBoardVisible, setKeyBoardVisible] = useState(false)
  const [costValue, setCostValue] = useState('0.00')

  return (
    <>
      <Tabs active="active">
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
                  hideOnClickOutside={true}
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
              return <Grid.Item 
                text={name_} 
                key={name_}
                // icon={<Image src={require(`../../../assets/img/typeList/${transPic(item.sortImg)}`).default}/>}
                
                onClick={() => {console.log(456)}}
              />
            })
          }
        </Grid>

        </Tabs.TabPane>
      </Tabs>

      <NumberKeyboard 
        title={<Field label="  " readonly value={costValue}/>}
        value={costValue}
        theme="custom" 
        extraKey={['.', <Icon name="calendar-o"/>]}
        closeButtonText="完成"
        visible={keyBoardVisible}
        onInput={(v) => {

          if(typeof v !== 'string' && typeof v !== 'number') {
            console.log('你是日历')
          } else {
            console.log(v)
          }
        }}
        onClose={() => {
          console.log(typeof costValue, costValue)
          
        }}
        onChange={setCostValue}
        onBlur={async () => {
          setKeyBoardVisible(false)
        }}
      />
    </>
  )
}
