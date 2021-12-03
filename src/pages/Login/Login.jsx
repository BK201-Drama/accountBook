// react的改动，最好使用函数组件，尽量避免使用类组件

import React, { Component } from 'react'
import { Form, Button, Field, Notify } from 'react-vant'
import Img from '../../assets/img/LoginBackground.png'
import './Login.css'
import * as LoginAPI from '../../api/Login/LoginAPI'
import { useNavigate } from 'react-router-dom'

export default function Login () {

  // 不知为什么，好像用了v6的react-router-dom之后，this.props.history.push在类组件里面没有...因此我们需要操作
  const navigate = useNavigate()

  const onFinish = async (value) => {
    console.log(value)
    const k = await LoginAPI.userLogin(value)
    console.log(k)
    navigate('/user/Tabbar')
  }

  const rks = () => {
    Notify.show({
      message: "danger",
      duration: 1000
    })
    navigate('/user/sign')
  }
  
  const [form] = Form.useForm()

  return (
    <>
      <img src={Img} className={"myImg"} alt=""/>
      <div className={"FormBox"}>
        <h3 className={"loginText"}>Login</h3>
        <Form
          form={ form }
          onFinish={ onFinish }
          footer={
            <div style={{ margin: '16px 16px 0' }}>
              <Button round nativeType="submit" type="primary" block>
                提交
              </Button>
            </div>
          }
        >
          <Form.Item
            name="username"
            label="账号"
          >
            <Field placeholder="请输入你的账号" />
          </Form.Item>
          <Form.Item
            name="password"
            label="密码"
            // rules={[{ pattern: /\d{6}/, message: '密码不能为空' }]}
          >
            <Field placeholder="请输入你的密码" />
          </Form.Item>
          <Form.Item
          >
            <a style={{color: 'blue', fontSize: 6}} onClick={ rks }>还没注册?点我</a>
          </Form.Item>
        </Form>
      </div>
    </>
  )
}
