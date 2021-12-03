import React from 'react'
// import { Redirect } from 'react-router'
import { HashRouter , Route, Routes } from 'react-router-dom'

import Login from '../Login/Login'
import Sign from '../Sign/Sign'
import Tabbar from '../../Components/Tabbar/Tabbar'
import Nav_ from '../../Components/Nav/Nav'

import Booking from './Booking/Booking'
import BillDetails from './BillDetails/BillDetails'
import Charts from './Charts/Charts'
import MyZone from './MyZone/MyZone'

export default function PageContainer () {
  return (
    <>
      <Nav_/>
      <Tabbar/>
      <Routes>
        <Route path="/" element={<Login />} exact/>
        <Route path="/user/login" element={<Login />} exact/>


        <Route path="/BillDetails" element={<BillDetails />} exact/>
        <Route path="/Charts" element={<Charts />} exact/>
        <Route path="/Booking" element={<Booking />} exact/>
        <Route path="/MyZone" element={<MyZone />} exact/>
        {/* 重定向的新型写法 */}
        {/* <Redirect from="/" to="/user/login" /> */}
      </Routes>
    </>
  )
}
