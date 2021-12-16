export default function hms (date) {

  date = new Date(date / 1000)
  const h = date.getHours(); //获取小时数
  const m = date.getMinutes(); //获取分钟数
  const s = date.getSeconds(); //获取秒数
  const str = h + ':' + m + ':' + s
  return str
}