export default function timeTranslate (date) {
  date = new Date(date)
  console.log(date)
  const Y = date.getFullYear();  //获取年份
  const M = (date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1);  //获取月份
  const D = date.getDate(); //获取日期 
  const str = Y + '-' + M + '-' + D
  return str
}