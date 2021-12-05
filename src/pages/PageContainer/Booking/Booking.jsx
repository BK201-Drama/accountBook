import React, { useEffect, useState } from 'react'
import { Icon, Tabs, Grid, NumberKeyboard, Image } from 'react-vant'
import * as BookingAPI from '../../../api/Booking/BookingAPI'
import store from '../../../redux/store'

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

  return (
    <>
      <Tabs active="active">
        <Tabs.TabPane title="支出">
          <Grid border={false} columnNum={4}>
            {
              listOut.map((item) => {
                const name_ = `${item.sortName}`
                return <Grid.Item 
                  text={name_} 
                  icon={<Image src="require('../../../assets/img/LoginBackground.png')"/>}
                  onClick={async () => {
                    console.log(item)
                  }}
                />
              })
            }
          </Grid>

        </Tabs.TabPane>

        <Tabs.TabPane title="收入">

        <Grid border={false} columnNum={4}>
          {
            listIn.map((item) => {
              const name_ = `${item.sortName}`
              return <Grid.Item text={name_} icon={'https://b.yzcdn.cn/vant/icon-demo-1126.png'} onClick={() => {console.log(456)}}/>
            })
          }
        </Grid>

        </Tabs.TabPane>
      </Tabs>

      <NumberKeyboard 
        theme="custom" 
        extraKey={['.', <Icon name="calendar-o"/>]}
        closeButtonText="完成"
        visible={false}
        onInput={(v) => {

          if(typeof v !== 'string' && typeof v !== 'number') {
            console.log('你是日历')
          } else {
            console.log(v)
          }
        }}
        // hideOnClickOutside={true}
      />
    </>
  )
}
