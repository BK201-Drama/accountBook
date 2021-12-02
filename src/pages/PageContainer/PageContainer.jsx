import React from 'react'
// import { Redirect } from 'react-router'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import Login from '../Login/Login'
import Sign from '../Sign/Sign'

export default function PageContainer () {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} exact/>
        <Route path="/user/login" element={<Login />} exact/>
        <Route path="user/sign" element={<Sign />} exact/>
        {/* 重定向的新型写法 */}
        {/* <Redirect from="/" to="/user/login" /> */}
      </Routes>
    </BrowserRouter>
  )
}
