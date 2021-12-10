// 时间戳转换

export default function translateTimeStamp (date) {
  date = new Date(date)
  console.log(date)
  const Y = date.getFullYear();  //获取年份
  const M = (date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1);  //获取月份
  const D = date.getDate(); //获取日期 
  const h = date.getHours(); //获取小时数
  const m = date.getMinutes(); //获取分钟数
  const s = date.getSeconds(); //获取秒数
  const str = Y + '-' + M + '-' + D + ' %20' + h + ':' + m + ':' + s
  return str
}