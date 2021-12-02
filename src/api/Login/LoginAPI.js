import axios from '../http'

export async function userLogin (info) {
  var data = await axios.get(`user/login?username=${info.username}&password=${info.password}`)
  console.log(data)
  return data
}