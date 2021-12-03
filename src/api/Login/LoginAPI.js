import axios from '../http'

export async function userLogin (info) {
  var {data: res} = await axios.get(`user/login?username=${info.username}&password=${info.password}`)
  return res
}

export async function userSign (info) {
  var {data: res} = await axios.get(`user/sign?username=${info.username}&password=${info.password}&mail=${info.mail}`)
  return res
}

export async function userForgetPw (info) {
  var {data: res} = await axios.get(`user/forgetPw?username=${info.username}&mail=${info.mail}`)
  return res
}

export async function resetPw (info) {
  var {data: res} = await axios.get(`user/changePw?username=${info.username}&password=${info.password}$code=${info.code}`)
  return res
}