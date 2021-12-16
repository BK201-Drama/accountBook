function hms (date) {
  console.log(typeof date)
  // date = parseInt(date)
  date = date / 1000
  // date = toString(date)
  date = new Date(date)
  console.log(date)
  const h = date.getHours(); //获取小时数
  const m = date.getMinutes(); //获取分钟数
  const s = date.getSeconds(); //获取秒数
  const str = h + ':' + m + ':' + s
  return str
}

console.log(hms(1640609903000))