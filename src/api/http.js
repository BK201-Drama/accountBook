import axios from 'axios'

// 设置前部分url，后续的url都会与它拼接
axios.defaults.baseURL = 'http://106.55.188.184:8080/ssmBillBook/'

// 是否为登录状态，不是就来登录获得token
// 请求拦截
axios.interceptors.request.use(config => {
  var token = sessionStorage.getItem("token")

  if(token){
    config.headers.Authorization = token
  }
  console.log("123")
  return config
})
// 响应拦截
axios.interceptors.response.use(config => {
  console.log("123qwe")
  return config
})

export default axios