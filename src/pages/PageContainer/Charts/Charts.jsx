import React, { useEffect, useState } from 'react'
import Charts_ from '../../../Components/Charts/Charts'
import { Grid, Tabs, Field, Popup, DatetimePicker, Image } from 'react-vant'
import store from '../../../redux/store'
import * as BillDetailAPI from '../../../api/BillDetails/BillDetailsAPI'
import transPicData from '../../../utils/transPicData'

export default function Charts (props) {

  // 登录信息
  const res = store.getState()

  const [outSortlist, setOutSortlist] = useState([])
  const [inSortlist, setInSortList] = useState([])
  const [totalOut, setTotalOut] = useState()
  const [totalIn, setTotalIn] = useState()

  const [tmp, setTmp] = useState([])
  const [data_, setData_] = useState([
    {value: 1, name: "请选择时间"}
  ])

  // 控制弹窗1
  const [showPicker, setShowPicker] = useState(false)
  const [fieldValue, setFieldValue] = useState(new Date())

  // 控制弹窗2
  const [showPicker1, setShowPicker1] = useState(false)
  const [fieldValue1, setFieldValue1] = useState()

  useEffect(async () => {
    // const response = await BillDetailAPI.categorizeByType({
    //   userId: res.id,
    //   Year: 2021,
    //   Month: '01'
    // })
    // console.log(response)
    // await setOutSortlist(response.outSortlist)
    // await setInSortList(response.inSortlist)
    // await setTotalOut(response.totalOut)
    // await setTotalIn(response.totalIn)
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
    await setInSortList(response.inSortlist)
    await setTotalOut(response.totalOut)
    await setTotalIn(response.totalIn)

    console.log('month', month)
    console.log('newRes', response)

    console.log('outSortlist', outSortlist)

    const t_val = transPicData(outSortlist)
    await setData_(t_val)
    console.log(data_)
  }, [fieldValue])

  const data__ = [
    {value: 235, name: '视频广告'},
    {value: 274, name: '联盟广告'},
    {value: 310, name: '邮件营销'},
    {value: 335, name: '直接访问'}
  ]

  return (

    <Tabs active="active"
      onChange={(v) => {
        console.log(v)
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
            onConfirm={(value) => {
              setFieldValue(value)
              setShowPicker(false)
            }}
            type="year-month"
            minDate={new Date(2018, 0, 1)}
            maxDate={new Date(2024, 2, 1)}
            value={new Date()}
          />
        </Popup>

        <Charts_ data={data_} id={"1"}/>

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
            onConfirm={(value) => {
              setFieldValue1(value);
              setShowPicker1(false);
            }}
            type="date"
            minDate={new Date(2018, 0, 1)}
            maxDate={new Date(2024, 2, 1)}
            value={new Date()}
          />
        </Popup>
        
        <Charts_ data={data__} id={"2"}/>

      </Tabs.TabPane>

    </Tabs>
  )
}