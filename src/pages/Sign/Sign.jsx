import React, { Component } from 'react'
import Img from '../../assets/img/LoginBackground.png'
import { Form, Button, Field } from 'react-vant'
import './Sign.css'

export default class Sign extends Component {
  onFinish = (value) => {
    console.log(value)

    console.log('====================')
    this.props.history.push('/user/login')
    console.log('====================')
  }

  form = React.createRef()

  render() {
    return (
      <>
        <div>
          <img src={Img} className={"myImg"} alt=""/>
        </div>

        <div className={"FormBox"}>
          <h3 className={"loginText"}>Sign</h3>
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
          </Form>
        </div>
      </>
    )
  }
}

