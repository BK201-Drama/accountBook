import React, { useState } from 'react'
import store from '../../../redux/store'
import { Uploader, Icon, Cell, ConfigProvider, Dialog, Toast, Radio, Flex } from 'react-vant'
import * as MyZoneAPI from '../../../api/MyZone/MyZoneAPI'

const themeVars = {
  '--rv-cell-label-margin-top': '16px',
}

export default function MyZone () {

  // redux的公共状态
  const res = store.getState()
  console.log(res)


  const changeUsername = () => {

  }

  const changePassword = () => {

  }

  const changePhone = () => {

  }

  const changeMail = () => {

  }


  
  const name = `${res.id}` + `_1514361165324.png`

  const setUrl_ = (name) => {
    return `http://106.55.188.184:8080/ssmBillBook/upload/${name}`
  }

  // 上传图片的
  const [url, setUrl] = useState(
    res.id > 0 ? 
    `http://106.55.188.184:8080/ssmBillBook/upload/` + `${res.id}` + `_1514361165324.png` :
    'https://b.yzcdn.cn/vant/icon-demo-1126.png'
  )
  const [showPic, setShowPic] = useState(false)
  const [isShowUpload, setIsShowUpload] = useState(true)

  // 更改性别的
  const [showGen, setShowGen] = useState(false)
  const [RadioValue, setRadioValue] = useState(res.gender)

  return (
    <ConfigProvider themeVars={themeVars}>
      <Cell.Group>
        <Cell
          title="头像" 
          isLink
          rightIcon={<Icon name={url} size="55px"/>} 
          label="点击即可更换头像"
          onClick={async () => {
            setShowPic(true)
          }}
        />
        <Cell title="用户名" value={`${res.username}`}/>
        <Cell title="性别" value={`${res.gender}`=== 'M' ? '男' : '女'} onClick={() => {setShowGen(true)}} isLink/>
        <Cell title="电话" value={`${res.phone}`} onClick={changePhone}/>
        <Cell title="邮箱" value={`${res.mail}`} onClick={changeMail}/>
      </Cell.Group>

      {/* 更换头像的对话框 */}
      <Dialog
        visible={showPic}
        title="更换头像"
        showCancelButton={true}
        showConfirmButton={false}
        onCancel={() => setShowPic(false)}
        // onConfirm={changePic}
        messageAlign={"center"}
      >
        <Flex>
          <Flex.Item span={9}/>
          <Flex.Item span={16}>
            <Uploader 
              style={{marginTop: 30}}
              resultType={"file"}

              afterRead={async (file) => {

                // 重新创建一个名字
                var newfile = new File([file.file], name, {type:"image/jpeg"})

                var resp = await MyZoneAPI.uploadPic(newfile)

                if (resp.status < 200) {
                  await setIsShowUpload(false)

                  await setUrl(`http://106.55.188.184:8080/ssmBillBook/upload/` + `${res.id}` + `_1514361165324.png`)

                  await setIsShowUpload(true)
                  await setShowPic(false)

                  Toast.info({
                    message: `ok`
                  })

                  store.dispatch({
                    type: 'store',
                    data: res
                  })
                }
              }}

              showUpload={isShowUpload}
              value={[]}
            />
          </Flex.Item>
        </Flex>
      </Dialog>

      {/* 更换性别的对话框 */}
      <Dialog
        visible={showGen}
        title="更换性别"
        showCancelButton={true}
        onConfirm={async () => {
          const response = await MyZoneAPI.uploadGender({
            id: res.id,
            username: res.username,
            gender: RadioValue,
            phone: res.phone,
            mail: res.mail
          })

          store.dispatch({
            type: 'store',
            data: response
          })

          console.log("response", response)
          setShowGen(false)
        }}
        onCancel={() => {
          setShowGen(false)
        }}
      >
        <Radio.Group value={RadioValue}>
          <Cell.Group>
            <Cell title="男" icon="friends-o" rightIcon={<Radio name="M"/>} onClick={() => {setRadioValue("M")}}/>
            <Cell title="女" icon="manager-o" rightIcon={<Radio name="F"/>} onClick={() => {setRadioValue("F")}}/>
          </Cell.Group>
        </Radio.Group>
      </Dialog>
      {/* 后续有时间再来补充吧 */}
      <Dialog></Dialog>
      <Dialog></Dialog>
    </ConfigProvider>
  )
}