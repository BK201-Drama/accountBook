import axios from '../http'

export async function getList (id) {
  const {data: res} = await axios.get(`note/user/${id}`)
  return res
}