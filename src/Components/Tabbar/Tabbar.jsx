import react, { useState } from 'react';
import { Tabbar, ConfigProvider } from 'react-vant'
import { useNavigate } from 'react-router-dom'
import { Form, Button, Field, Notify } from 'react-vant'

const themeVars = {
  '--rv-tabbar-background-color': "rgb(103, 194, 179)",
  '--rv-tabbar-item-text-color': '#fff',
  '--rv-tabbar-item-active-color': "rgb(246, 130, 115)",
  '--rv-tabbar-item-active-background-color': 'rgb(103, 194, 179)'
}

export default function Tabbar_ () {
  const navigate = useNavigate()
  return (
    <ConfigProvider themeVars={themeVars}>
      <Tabbar onChange={(v) => {
        // if(v === 0) {
        //   navigate('/BillDetails')
        // }
        switch (v) {
          case 0: navigate('/BillDetails');break
          case 1: navigate('/Charts');break
          case 2: navigate('/Booking');break
          case 3: navigate('/MyZone');break
        }
      }}>
        <Tabbar.Item icon="home-o">明细</Tabbar.Item>
        <Tabbar.Item icon="search">
          图表
        </Tabbar.Item>
        <Tabbar.Item icon="friends-o">
          记账
        </Tabbar.Item>
        <Tabbar.Item icon="setting-o">
          我的
        </Tabbar.Item>
      </Tabbar>
    </ConfigProvider>
  )
}