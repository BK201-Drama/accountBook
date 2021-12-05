import React from 'react'
import store from '../../../redux/store'

export default function BillDetails () {
  var k = store.getState()
  console.log(k)
  return (
    <div>
      BillDetails
    </div>
  )
}