// const str = 'changhuanfeiyong@2x.png'

// function transPic (str) {
//   const str_ = str.split('@2x')
//   str_.unshift('sort_')
//   const s = str_.join('')
//   return s
// }

// console.log(`../../../assets/img/typeList/${transPic(str)}`)

function transPicData (Arr) {
  const result = []
  if (Arr.length === 0 || Arr.length === undefined) {
    return []
  } 
  Arr.map((item) => {
    result.push({
      value: item.money,
      name: item.sort.sortName
    })
    return item
  })
  return result
}

const a = [
  {
      back_color: "#A4F5EF",
      money: "20.0",
      sort: {
          id: 1,
          uid: 0,
          sortName: "偿还费用",
          sortImg: "changhuanfeiyong@2x.png",
          priority: 0,
          income: false
      },
      list: [
          {
              id: 128,
              cost: 20.0,
              content: "none",
              userid: 1,
              payid: 1,
              sortid: 1,
              crdate: 1609430400000,
              income: false,
              version: 0,
              sort: null
          }
      ]
  },
  {
      back_color: "#3303FF",
      money: "1670.0",
      sort: {
          id: 2,
          uid: 0,
          sortName: "手续费",
          sortImg: "shouxufei@2x.png",
          priority: null,
          income: false
      },
      list: [
          {
              id: 111,
              cost: 555.0,
              content: "test",
              userid: 1,
              payid: 3,
              sortid: 2,
              crdate: 1609505903000,
              income: false,
              version: 0,
              sort: null
          },
          {
              id: 112,
              cost: 555.0,
              content: "test",
              userid: 1,
              payid: 3,
              sortid: 2,
              crdate: 1609505903000,
              income: false,
              version: 0,
              sort: null
          },
          {
              id: 117,
              cost: 555.0,
              content: "test",
              userid: 1,
              payid: 3,
              sortid: 2,
              crdate: 1609505903000,
              income: false,
              version: 0,
              sort: null
          },
          {
              id: 125,
              cost: 5.0,
              content: "test",
              userid: 1,
              payid: 3,
              sortid: 2,
              crdate: 1609505903000,
              income: false,
              version: 0,
              sort: null
          }
      ]
  },
  {
      back_color: "#A58472",
      money: "1.0",
      sort: {
          id: 4,
          uid: 0,
          sortName: "违约金",
          sortImg: "weiyuejin@2x.png",
          priority: null,
          income: false
      },
      list: [
          {
              id: 126,
              cost: 1.0,
              content: "none",
              userid: 1,
              payid: 1,
              sortid: 4,
              crdate: 1609505903000,
              income: false,
              version: 0,
              sort: null
          }
      ]
  }
]
console.log(transPicData(a))