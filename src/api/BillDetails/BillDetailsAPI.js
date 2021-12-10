import axios from '../http'

export async function categorizeByDay (info) {
  const {data: res} = await axios.get(
    `bill/user/${info.userId}/${info.Year}/${info.Month}`
  )
  return res
}

export async function categorizeByType (info) {
  const {data: res} = await axios.get(
    `bill/chart/${info.userId}/${info.Year}/${info.Month}`
  )
  return res
}

