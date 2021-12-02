import React, { Component } from 'react'
import { Form, Button, Field } from 'react-vant'
import Img from '../../assets/img/LoginBackground.png'
import './Login.css'
import * as LoginAPI from '../../api/Login/LoginAPI'

export default class Login extends Component {
  onFinish = async (value) => {
    console.log(value)
  }
  
  form = React.createRef()

  render() {
    return (
      <>
        <img src={Img} className={"myImg"} alt=""/>

        <div className={"FormBox"}>
          <h3 className={"loginText"}>Login</h3>
          <Form
            ref={ this.form }
            onFinish={ this.onFinish }
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
              <a style={{color: 'blue', fontSize: 6}} href="/user/sign">还没注册?点我</a>
            </Form.Item>
          </Form>
        </div>
      </>
    )
  }
}
