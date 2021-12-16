export default function yearMonth (date) {
  date = new Date(date)
  console.log(date)
  const Y = date.getFullYear();  //获取年份
  const M = (date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1);  //获取月份
  const str = Y + '-' + M
  return str
}