import React from 'react'
// import { Redirect } from 'react-router'
import { HashRouter , Route, Routes } from 'react-router-dom'

import Login from '../Login/Login'
import Sign from '../Sign/Sign'
import Tabbar from '../../Components/Tabbar/Tabbar'
import Booking from './Booking/Booking'

export default function PageContainer () {
  return (
    <>
      <Tabbar/>
      <Routes>
        <Route path="/" element={<Login />} exact/>
        <Route path="/user/login" element={<Login />} exact/>
        <Route path="/user/sign" element={<Sign />} exact/>
        <Route path="/user/booking" element={<Booking />} exact/>
        {/* 重定向的新型写法 */}
        {/* <Redirect from="/" to="/user/login" /> */}
      </Routes>
    </>
  )
}
