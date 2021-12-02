// 路由守卫文件
import React, { Component } from 'react'
import { HashRouter, Route, Routes } from 'react-router-dom' 

import Login from '../pages/Login/Login'
import PageContainer from '../pages/PageContainer/PageContainer'

export default class RouteDef extends Component {
  render() {
    return (
      <HashRouter>
        <Routes>
          {/* <Route path='/user/login' element={<Login/>}/> */}
          <Route path='/' element={<PageContainer/>}/>
        </Routes>
      </HashRouter>
    )
  }
}
