import React, { useEffect, useState } from 'react'
import { Icon, Tabs, Grid, NumberKeyboard, Image, Field } from 'react-vant'
import * as BookingAPI from '../../../api/Booking/BookingAPI'
import store from '../../../redux/store'
import transPic from '../../../utils/transPic'

export default function Booking () {

  const res = store.getState()

  console.log(res)

  const [listOut, setListOut] = useState([])
  const [listIn, setListIn] = useState([])

  useEffect(async () => {
    var dat = await BookingAPI.getList(res.id)
    await setListOut(dat.outSortlis)
    await setListIn(dat.inSortlis)
  }, [])

  const [keyBoardVisible, setKeyBoardVisible] = useState(false)

  return (
    <>
      <Tabs active="active">
        <Tabs.TabPane title="支出">
          <Grid border={false} columnNum={5}>
            {
              listOut.map((item) => {
                const name_ = `${item.sortName}`
                
                return <Grid.Item
                  text={name_}
                  key={name_}
                  // 图片最好只要50px的
                  icon={<Image src={require(`../../../assets/img/typeList/${transPic(item.sortImg)}`).default}/>}
                  onClick={async () => {
                    console.log(item)
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
                icon={<Image src={require(`../../../assets/img/typeList/${transPic(item.sortImg)}`).default}/>}
                onClick={() => {console.log(456)}}
              />
            })
          }
        </Grid>

        </Tabs.TabPane>
      </Tabs>
{/* 
      <NumberKeyboard 
        title={<Field/>}
        // delete={<Field/>}
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
        onBlur={async () => {
          setKeyBoardVisible(false)
        }}
        // hideOnClickOutside={true}
      /> */}
    </>
  )
}
