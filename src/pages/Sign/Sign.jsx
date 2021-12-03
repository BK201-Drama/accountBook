// react的改动，最好使用函数组件，尽量避免使用类组件

import React, { Component } from 'react'
import { Form, Button, Field, Notify } from 'react-vant'
import Img from '../../assets/img/LoginBackground.png'
import './Sign.css'
import * as LoginAPI from '../../api/Login/LoginAPI'
import { useNavigate } from 'react-router-dom'

export default function Sign () {

  // 不知为什么，好像用了v6的react-router-dom之后，this.props.history.push在类组件里面没有...因此我们需要操作
  const navigate = useNavigate()

  const onFinish = async (value) => {
    if (!value.username || !value.password || !value.mail) {
      Notify.show({
        type: 'danger',
        message: "信息填写不完全！",
        duration: 1000
      })
      return
    }

    // 如果都填写正常的话，就发请求
    var res = await LoginAPI.userSign(value)
    if(res.status < 200) {
      Notify.show({
        type: 'success',
        message: "注册成功！",
        duration: 1000
      })
      navigate('/user/login')
    } else if (res.status === 200) {
      Notify.show({
        type: 'danger',
        message: "用户名已经存在，请继续注册！",
        duration: 1000
      })
    }
  }

  
  const [form] = Form.useForm()

  return (
    <>
      <img src={Img} className={"myImg"} alt=""/>
      <div className={"FormBox"}>
        <h3 className={"loginText"}>Sign</h3>
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
            label="注册账号"
          >
            <Field placeholder="请输入你想注册的账号" />
          </Form.Item>
          <Form.Item
            name="password"
            label="密码"
            // rules={[{ pattern: /\d{6}/, message: '密码不能为空' }]}
          >
            <Field placeholder="请输入你想注册的密码" />
          </Form.Item>
          <Form.Item
            name="mail"
            label="注册邮箱"
            // rules={[{ pattern: /\d{6}/, message: '密码不能为空' }]}
          >
            <Field placeholder="请输入你的邮箱" />
          </Form.Item>
        </Form>
      </div>
    </>
  )
}
