//暂时解决跨域问题
const { createProxyMiddleware } = require('http-proxy-middleware')

module.exports = function(app){
  app.use(
    '/api',
    createProxyMiddleware({
      target: 'http://120.77.57.222:8889/api/private/v1/',
      changeOrigin: true, 
    })
  )
}