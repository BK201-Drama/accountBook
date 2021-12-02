//暂时解决跨域问题
const { createProxyMiddleware } = require('http-proxy-middleware')

module.exports = function(app){
  app.use(
    '/api',
    createProxyMiddleware({
      target: 'http://106.55.188.184:8080/ssmBillBook/',
      changeOrigin: true, 
    })
  )
}