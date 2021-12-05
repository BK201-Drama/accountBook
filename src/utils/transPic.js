export default function transPic (str) {
  const str_ = str.split('@2x')
  str_.unshift('sort_')
  const s = str_.join('')
  console.log(s)
}