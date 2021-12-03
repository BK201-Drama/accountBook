import axios from '../http'

export async function userLogin (info) {
  var {data: res} = await axios.get(`user/login?username=${info.username}&password=${info.password}`)
  return res
}