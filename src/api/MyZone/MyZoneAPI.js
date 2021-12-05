import axios from '../http'

export async function resetInfo (info) {
  var {data: res} = await axios.get(
    `user/update?id=${info.id}&username=${info.username}&gender=${info.gender}&phone=${info.phone}&mail=${info.mail}`
  )
  return res
}

export async function uploadPic (info) {

  console.log("axios", info)

  // 这里有一点需要我们注意：
  // 如果你是图片传输，那么请使用FormData存储为表单数据
  let formData = new FormData()
  formData.append('file', info)
  var {data: res} = await axios.post(
    'http://106.55.188.184:8080/ssmBillBook/file/upload', formData
  , {
    headers: {
      'Content-Type': 'multipart/form-data; boundary=<calculated when request is sent>',
      "Cache-Control": "no-cache"
    }
  })
  return res
}

export async function uploadGender (info) {
  var {data: res} = await axios.get(
    `user/update?id=${info.id}&username=${info.username}&gender=${info.gender}&phone=${info.phone}&mail=${info.mail}`
  )
  return res
}