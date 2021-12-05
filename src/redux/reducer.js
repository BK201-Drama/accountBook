const initState = {
  status: 100,
  message: "处理成功！",
  id: 1,
  username: "admin",
  password: "3E3E6B0E5C1C68644FC5CE3CF060211D",
  image: "1_1514361165324.png",
  gender: "F",
  phone: "15922646438",
  mail: "375027533@qq.com",
  state: 0,
  mailcode: "450294",
  phonecode: null
}

export default function Reducer (preState = initState, action) {
  // 在action中拿到type和data
  const {type, data} = action
  switch (type) {
    case 'store':
      return data
    case 'list':
      return data
    default:
      return preState
  }
}