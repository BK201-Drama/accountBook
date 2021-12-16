import axios from '../http'

export async function getList (id) {
  const {data: res} = await axios.get(`note/user/${id}`)
  return res
}

export async function addBook (info) {
  const {data: res} = await axios.get(
    `bill/add?userid=${info.userId}&sortid=${info.sortid}&payid=${info.payid}&cost=${info.cost}&crdate=${info.crdate}&content=${info.content}&income=${info.income}`
  )
  return res
}

export async function deleteBook (id) {
  const {data: res} = await axios.get(
    `bill/delete/${id}`
  )
  return res
}