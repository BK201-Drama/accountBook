export default function transPicData (Arr) {
  const result = []
  if (Arr.length === 0 || Arr.length === undefined) {
    return []
  }
  Arr.map((item) => {
    result.push({
      value: parseFloat(item.money),
      name: item.sort.sortName
    })
  })
  return result
}