import react, { useState, useEffect } from 'react';
import { Tabbar, ConfigProvider, Popup, Toast } from 'react-vant'
import { useNavigate } from 'react-router-dom'
import { Form, Button, Field, Notify, PasswordInput } from 'react-vant'
import * as LoginAPI from '../../api/Login/LoginAPI'
import Img from '../../assets/img/LoginBackground.png'

export default function Forget () {

  const navigate = useNavigate()

  const onFinish = async (value) => {
    if (!value.username || !value.mail) {

      // 重新给爷弹回去
      setShow(!show)
      Toast.fail('未填全信息！');
      return
    }

    await setUsername(value.username)
    await setMail(value.mail)
    const res = await LoginAPI.userForgetPw(value)
    // console.log(res)
    await setCode(res.mailcode)
  }

  const setVisible = async () => {
    await setShow(!show)
  }

  // 状态
  const [show, setShow] = useState(false)
  const [username, setUsername] = useState()
  const [mail, setMail] = useState()
  const [code, setCode] = useState()


  // username和mail变化的自定义钩子函数
  // 在这里我们不需要做事情，只需要让username、mail立刻更新状态，而不进行状态合并
  useEffect(() => {
    
  }, [username, mail, code])

  // 返回登录界面
  const rks = () => {
    navigate('/user/login')
  }

  const submitNewPassword = async (value) => {
    const obj = {
      username: username,
      password: value.password,
      code: value.code
    }

    const res = await LoginAPI.resetPw(obj)

    if (res.status < 200) {
      Toast.success('修改成功')
      await setShow(!show)
      navigate('/user/login')
    } else {
      Toast.fail('错误，请重试')
    }
  }

  const [form] = Form.useForm()

  const [form_] = Form.useForm()
  return (
    <>
    <img src={Img} className={"myImg"} alt=""/>
    <div className={"FormBox"}>
      <h3 className={"loginText"}>Forgot Password</h3>
      <Form
        form={ form }
        onFinish={ onFinish }
        footer={
          <div style={{ margin: '16px 16px 0' }}>
            <Button round nativeType="submit" type="primary" block onClick={() => {setShow(!show)}}>
              获取验证码
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
          name="mail"
          label="邮箱"
          // rules={[{ pattern: /\d{6}/, message: '密码不能为空' }]}
        >
          <Field placeholder="请输入你的绑定邮箱" />
        </Form.Item>
        <Form.Item
        >
          <a style={{color: 'blue', fontSize: 6}} onClick={ rks }>返回登录</a>
        </Form.Item>
      </Form>
    </div>

    <Popup
      visible={show === true} round position="bottom" style={{ height: '30%' }}
      destroyOnClose={true}
      onClickOverlay={setVisible}
    >
      <Form
        form={ form_ }
        onFinish={ submitNewPassword }
        footer={
          <div style={{ margin: '16px 16px 0' }}>
            <Button round nativeType="submit" type="primary" block>
              修改密码
            </Button>
          </div>
        }
      >
        <Form.Item
          name="password"
          label="请输入新密码"
        >
          <Field placeholder="请输入新密码"/>
        </Form.Item>

        <Form.Item
          name="code"
          label="请输入验证码"
        >
          <Field placeholder="请输入验证码"/>
        </Form.Item>
      </Form>
    </Popup>
  </>
  )
}