// 路由守卫文件
import React, { Component } from 'react'
import Login from '../pages/Login/Login'
import PageContainer from '../pages/PageContainer/PageContainer'

export default class RouteDef extends Component {
  render() {
    return (
      <div>
        <Login/>
      </div>
    )
  }
}
