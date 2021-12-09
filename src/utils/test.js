const str = 'changhuanfeiyong@2x.png'

function transPic (str) {
  const str_ = str.split('@2x')
  str_.unshift('sort_')
  const s = str_.join('')
  return s
}

console.log(`../../../assets/img/typeList/${transPic(str)}`)