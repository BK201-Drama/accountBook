const str = 'changhuanfeiyong@2x.png'
const str_ = str.split('@2x')
str_.unshift('sort_')
const s = str_.join('')
console.log(s)