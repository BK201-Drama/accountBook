import React from 'react'
import store from '../../../redux/store'
import { Image, SwipeCell, Button, Flex, Typography } from 'react-vant'
import Img from '../../../assets/img/typeList/sort_bangong.png'

export default function BillDetails () {
  var k = store.getState()
  console.log(k)
  return (
    <>
      <SwipeCell
        rightAction={
          <Button style={{ height: '100%' }} square type="danger">
            删除
          </Button>
        }
      >
        <Flex className="demo-card" align="stretch">
          <Image src="https://img.yzcdn.cn/vant/ipad.jpeg" className="demo-card__img" />
          <Flex direction="column" justify="between" className="demo-card__content">
            <div>
              <Typography.Title level={5}>商品标题</Typography.Title>
              <Typography.Text type="secondary">这里是商品描述</Typography.Text>
            </div>
            <Flex justify="between" align="center">
              <Typography.Text strong size="lg">
                ¥2.00
              </Typography.Text>
              <Typography.Text size="sm" type="secondary">
                x2
              </Typography.Text>
            </Flex>
          </Flex>
        </Flex>
      </SwipeCell>
    </>
  )
}