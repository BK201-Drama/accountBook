// 接收两个数字字符串，返回一个字符串，里面做一个四则运算

export function add (str1, str2) {
  const num1 = parseFloat(str1)
  const num2 = parseFloat(str2)
  const sum = num1 + num2
  return sum.toString()
}

export function decrease (str1, str2) {
  const num1 = parseFloat(str1)
  const num2 = parseFloat(str2)
  const sum = num1 - num2
  return sum.toString()
}