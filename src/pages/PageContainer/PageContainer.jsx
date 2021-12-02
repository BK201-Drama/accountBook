import React, { Component } from 'react'
import { Route } from 'react-router'
import { Redirect, Routes } from 'react-router-dom'

import Login from '../Login/Login'
import Sign from '../Sign/Sign'

export default class PageContainer extends Component {
  render() {
    return (
      <Routes>
        <Route path="/user/login" element={<Login />} exact/>
        <Route path="/user/sign" element={<Sign />} exact/>

        <Redirect from="/" to="/user/login" exact/>
      </Routes>
    )
  }
}
