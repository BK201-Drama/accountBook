import react, { useState } from 'react';
import { Tabbar } from 'react-vant'
import { useNavigate } from 'react-router-dom'
import { Form, Button, Field, Notify } from 'react-vant'

export default function Nav () {
  return (
    <Tabbar>
      <Tabbar.Item icon="home-o">标签</Tabbar.Item>
      <Tabbar.Item badge={{ dot: true }} icon="search">
        标签
      </Tabbar.Item>
      <Tabbar.Item badge={{ content: 5 }} icon="friends-o">
        标签
      </Tabbar.Item>
      <Tabbar.Item badge={{ content: 20 }} icon="setting-o">
        标签
      </Tabbar.Item>
    </Tabbar>
  )
}