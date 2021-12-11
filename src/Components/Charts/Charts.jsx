import React, { useEffect, useState, useMemo } from 'react'
import * as echarts from 'echarts'

export default function Charts_ (props) {

  const [dat, setDat] = useState(props.data)

  // useEffect(() => {

  //   var myChart = echarts.init(document.getElementById(props.id))
 
  //   myChart.setOption({
  //     series: [{
  //       name: '访问来源',
  //       type: 'pie',    // 设置图表类型为饼图
  //       radius: '50px',  // 饼图的半径，外半径为可视区尺寸（容器高宽中较小一项）的 55% 长度。
  //       data: dat
  //     }]
  //   })
  // }, [])

  useEffect(async () => {

    var myChart = echarts.init(document.getElementById(props.id))

    myChart.setOption({
      series: [{
        name: '访问来源',
        type: 'pie',    // 设置图表类型为饼图
        radius: '50px',  // 饼图的半径，外半径为可视区尺寸（容器高宽中较小一项）的 55% 长度。
        data: props.data
      }]
    })
  }, [props])

  return (
    <div id={props.id} style={{width: '80%', height: 300, marginLeft: '10%'}}></div>
  )
}