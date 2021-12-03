import React from 'react'
// import { Redirect } from 'react-router'
import { HashRouter , Route, Routes } from 'react-router-dom'
import Login from '../pages/Login/Login'
import PageContainer from '../pages/PageContainer/PageContainer'

export default function IndexRouter () {
  localStorage.getItem('set_a_token')
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Login />} exact/>
        {/* 一些不想要展示tabbar的栏目，我们可以在这里渲染 */}

        {/* ================================================= */}
        <Route path="*" element={<PageContainer/>} exact/>
      </Routes>
    </HashRouter>
  )
}