import React from 'react'
// import { Redirect } from 'react-router'
import { HashRouter , Route, Routes } from 'react-router-dom'
import Login from '../pages/Login/Login'
import Sign from '../pages/Sign/Sign'
import PageContainer from '../pages/PageContainer/PageContainer'
import Forget from '../pages/Forget/Forget'

export default function IndexRouter () {
  localStorage.getItem('set_a_token')
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Login />} exact/>
        <Route path="/user/login" element={<Login />} exact/>
        {/* 一些不想要展示tabbar的栏目，我们可以在这里渲染 */}
        <Route path="/user/sign" element={<Sign />} exact/>
        <Route path="/user/forgetPw" element={<Forget />} exact/>
        {/* ================================================= */}
        <Route path="*" element={<PageContainer/>} exact/>
      </Routes>
    </HashRouter>
  )
}