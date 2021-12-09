import React from 'react'
import store from '../../../redux/store'
import { Image } from 'react-vant'
import Img from '../../../assets/img/typeList/sort_bangong.png'

export default function BillDetails () {
  var k = store.getState()
  console.log(k)
  return (
    <div>
      {/* 因为require的base64放在default里面，因此需要在后面放置default属性 */}
      <Image src={require('../../../assets/img/typeList/sort_bangong.png').default}/>
    </div>
  )
}