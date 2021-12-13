import React, { useEffect } from 'react'
import * as echarts from 'echarts'

function getName (obj) {
  const result = []
  obj.map((item) => {
    result.push(item.name)
  })
  return result
}

function getValue (obj) {
  const result = []
  obj.map((item) => {
    result.push(item.value)
  })
  return result
}

export default function BarHistogram (props) {

  useEffect(() => {
    var chartDom = document.getElementById(props.id);
    var myChart = echarts.init(chartDom);

    myChart.setOption({
      xAxis: {
        type: 'category',
        data: getName(props.data)
      },
      yAxis: {
        type: 'value'
      },
      series: [
        {
          data: getValue(props.data),
          type: 'bar',
          showBackground: true,
          color: 'rgba(246, 130, 115, 1)',
          backgroundStyle: {
            color: 'rgba(180, 180, 180, 0.2)'
          }
        }
      ]
    })
  }, [props])

  return (
    <div id={props.id} style={{width: '110%', height: 280, marginLeft: '0%'}}></div>
  )
}