import React from 'react'
// import { Redirect } from 'react-router'
import { HashRouter, Route, Routes } from 'react-router-dom'

import Login from '../Login/Login'
import Sign from '../Sign/Sign'

export default function PageContainer () {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Login/>}/>
        <Route path="/user/login" element={<Login />}/>
        <Route path="/user/sign" element={<Sign />}/>
        {/* 重定向的新型写法 */}
        {/* <Redirect from="/" to="/user/login" /> */}
      </Routes>
    </HashRouter>
  )
}
