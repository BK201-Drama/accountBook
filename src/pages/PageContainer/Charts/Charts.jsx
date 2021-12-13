import React, { useEffect, useState, useMemo, memo } from 'react'
import Charts_ from '../../../Components/Charts/Charts'
import BarHistogram from '../../../Components/Charts/BarHistogram'
import { Grid, Tabs, Field, Popup, DatetimePicker, Image, Swiper, Divider } from 'react-vant'
import store from '../../../redux/store'
import * as BillDetailAPI from '../../../api/BillDetails/BillDetailsAPI'
import transPicData from '../../../utils/transPicData'

// const Charts_ = memo(Charts__)

export default function Charts (props) {

  // 登录信息
  const res = store.getState()

  const [outSortlist, setOutSortlist] = useState([])
  const [inSortlist, setInSortList] = useState([])
  const [totalOut, setTotalOut] = useState()
  const [totalIn, setTotalIn] = useState()

  const [data_, setData_] = useState([])
  const [data2_, setData2_] = useState([])

  // 控制弹窗1
  const [showPicker, setShowPicker] = useState(false)
  const [fieldValue, setFieldValue] = useState(new Date())

  // 控制弹窗2
  const [showPicker1, setShowPicker1] = useState(false)
  const [fieldValue1, setFieldValue1] = useState(new Date())

  useMemo(() => async () => {
    const response = await BillDetailAPI.categorizeByType({
      userId: res.id,
      Year: 2021,
      Month: '01'
    })

    await setOutSortlist(response.outSortlist)
    await setInSortList(response.inSortlist)
    await setTotalOut(response.totalOut)
    await setTotalIn(response.totalIn)
  }, [])

  useEffect(async () => {
    const year = fieldValue.getFullYear()
    const month = fieldValue.getMonth() + 1 < 10 ? '0' + (fieldValue.getMonth() + 1) : fieldValue.getMonth() + 1

    const response = await BillDetailAPI.categorizeByType({
      userId: res.id,
      Year: year,
      Month: month
    })

    await setOutSortlist(response.outSortlist)
    await setTotalOut(response.totalOut)

    const t_val = transPicData(response.outSortlist)
    await setData_(t_val)

  }, [fieldValue])

  useEffect(async () => {
    const year = fieldValue1.getFullYear()
    const month = fieldValue1.getMonth() + 1 < 10 ? '0' + (fieldValue1.getMonth() + 1) : fieldValue.getMonth() + 1

    const response = await BillDetailAPI.categorizeByType({
      userId: res.id,
      Year: year,
      Month: month
    })

    await setInSortList(response.inSortlist)
    await setTotalIn(response.totalIn)

    const t_val1 = transPicData(response.inSortlist)
    await setData2_(t_val1)

  }, [fieldValue1])

  return (

    <Tabs active="active"
      onChange={(v) => {
        // console.log(v)
      }}
    >

      <Tabs.TabPane title="支出">

        <Field
          readonly
          clickable
          label="日期"
          value={fieldValue}
          placeholder="选择显示账单日期"
          onClick={() => setShowPicker(true)}
        />
        <Grid border={false} columnNum={1}>
          <Grid.Item icon="after-sale" text={`支出：${totalOut}￥`} />
        </Grid>

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
              console.log('getmonth', value.getMonth())
              await setFieldValue(value)
              await setShowPicker(false)
            }}
            type="year-month"
            minDate={new Date(2018, 1, 1)}
            maxDate={new Date(2024, 2, 1)}
            value={fieldValue}
          />
        </Popup>

        {/* <Divider>图像</Divider> */}

        <Swiper className="my-swipe">
          <Swiper.Item>
            <Charts_ data={data_} id={"1"}/>
          </Swiper.Item>
          <Swiper.Item>
            <BarHistogram data={data_} id={"3"}/>
          </Swiper.Item>
        </Swiper>

      </Tabs.TabPane>

      <Tabs.TabPane title="收入">
        <Field
          readonly
          clickable
          label="日期"
          value={fieldValue1}
          placeholder="选择显示账单日期"
          onClick={() => setShowPicker1(true)}
        />
        <Grid border={false} columnNum={1}>
          <Grid.Item icon="after-sale" text={`支出：${totalIn}￥`} />
        </Grid>

        <Popup
          title="请选择日期"
          closeable
          visible={showPicker1}
          round
          position="bottom"
          onClose={() => setShowPicker1(false)}
        >
          <DatetimePicker
            showSubmitBtn
            onConfirm={async (value) => {
              await setFieldValue1(value)
              await setShowPicker1(false)
            }}
            type="year-month"
            minDate={new Date(2018, 1, 1)}
            maxDate={new Date(2024, 2, 1)}
            value={fieldValue1}
          />
        </Popup>
        
        <Charts_ data={data2_} id={"2"}/>

      </Tabs.TabPane>

    </Tabs>
  )
}