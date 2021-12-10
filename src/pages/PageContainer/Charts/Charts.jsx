import React, { useEffect, useState } from 'react'
import Charts_ from '../../../Components/Charts/Charts'
import { Tabs, Field, Popup, DatetimePicker } from 'react-vant'

export default function Charts (props) {

  const [data_, setData_] = useState([
    {value: 235, name: '视频广告'},
    {value: 274, name: '联盟广告'},
    {value: 310, name: '邮件营销'},
    {value: 335, name: '直接访问'},
    {value: 400, name: `搜索引擎`}
  ])

  const data__ = [
    {value: 235, name: '视频广告'},
    {value: 274, name: '联盟广告'},
    {value: 310, name: '邮件营销'},
    {value: 335, name: '直接访问'}
  ]

  const [showPicker, setShowPicker] = useState(false)
  const [fieldValue, setFieldValue] = useState()

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
              setFieldValue(value);
              setShowPicker(false);
            }}
            type="datetime"
            filter={(type, options) => {
              if (type === 'minute') {
                return options.filter((option) => option % 5 === 0);
              }
              return options;
            }}
            minDate={new Date(2021, 0, 1)}
            maxDate={new Date(2021, 2, 1)}
            value={new Date()}
          />
        </Popup>

        <Charts_ data={data_} id={"1"}/>
      </Tabs.TabPane>

      <Tabs.TabPane title="收入">
        <Charts_ data={data__} id={"2"}/>
      </Tabs.TabPane>

    </Tabs>
  )
}