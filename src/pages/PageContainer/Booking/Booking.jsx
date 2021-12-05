import React from 'react'
import { Tabs, Grid, Swiper, NumberKeyboard } from 'react-vant';

export default function Booking () {
  return (
    <>

      <Tabs active="active">
        <Tabs.TabPane title="支出">

          <Swiper className="my-swipe" autoplay={3000}>
            <Swiper.Item>
              <Grid border={false} columnNum={4}> 
                <Grid.Item text="文字1" icon={'https://b.yzcdn.cn/vant/icon-demo-1126.png'} onClick={() => {console.log(456)}}/>
                <Grid.Item text="文字1" icon={'https://b.yzcdn.cn/vant/icon-demo-1126.png'}/>
                <Grid.Item text="文字1" icon={'https://b.yzcdn.cn/vant/icon-demo-1126.png'}/>
                <Grid.Item text="文字1" icon={'https://b.yzcdn.cn/vant/icon-demo-1126.png'}/>
                <Grid.Item text="文字1" icon={'https://b.yzcdn.cn/vant/icon-demo-1126.png'}/>
                <Grid.Item text="文字1" icon={'https://b.yzcdn.cn/vant/icon-demo-1126.png'}/>
                <Grid.Item text="文字1" icon={'https://b.yzcdn.cn/vant/icon-demo-1126.png'}/>
                <Grid.Item text="文字1" icon={'https://b.yzcdn.cn/vant/icon-demo-1126.png'}/>
              </Grid>
            </Swiper.Item>
            <Swiper.Item>
              <Grid border={false} columnNum={4}>
                <Grid.Item text="文字2" icon={'https://b.yzcdn.cn/vant/icon-demo-1126.png'} onClick={() => {}}/>
                <Grid.Item text="文字2" icon={'https://b.yzcdn.cn/vant/icon-demo-1126.png'}/>
                <Grid.Item text="文字2" icon={'https://b.yzcdn.cn/vant/icon-demo-1126.png'}/>
                <Grid.Item text="文字2" icon={'https://b.yzcdn.cn/vant/icon-demo-1126.png'}/>
                <Grid.Item text="文字2" icon={'https://b.yzcdn.cn/vant/icon-demo-1126.png'}/>
                <Grid.Item text="文字2" icon={'https://b.yzcdn.cn/vant/icon-demo-1126.png'}/>
                <Grid.Item text="文字2" icon={'https://b.yzcdn.cn/vant/icon-demo-1126.png'}/>
                <Grid.Item text="文字2" icon={'https://b.yzcdn.cn/vant/icon-demo-1126.png'}/>
              </Grid>
            </Swiper.Item>
            <Swiper.Item>
              <Grid border={false} columnNum={4}>
                <Grid.Item text="文字3" icon={'https://b.yzcdn.cn/vant/icon-demo-1126.png'} onClick={() => {}}/>
                <Grid.Item text="文字3" icon={'https://b.yzcdn.cn/vant/icon-demo-1126.png'}/>
                <Grid.Item text="文字3" icon={'https://b.yzcdn.cn/vant/icon-demo-1126.png'}/>
                <Grid.Item text="文字3" icon={'https://b.yzcdn.cn/vant/icon-demo-1126.png'}/>
                <Grid.Item text="文字3" icon={'https://b.yzcdn.cn/vant/icon-demo-1126.png'}/>
                <Grid.Item text="文字3" icon={'https://b.yzcdn.cn/vant/icon-demo-1126.png'}/>
                <Grid.Item text="文字3" icon={'https://b.yzcdn.cn/vant/icon-demo-1126.png'}/>
                <Grid.Item text="文字3" icon={'https://b.yzcdn.cn/vant/icon-demo-1126.png'}/>
              </Grid>
            </Swiper.Item>
          </Swiper>

        </Tabs.TabPane>

        <Tabs.TabPane title="收入">

        <Grid border={false} columnNum={4}>
          <Grid.Item text="文字2" icon={'https://b.yzcdn.cn/vant/icon-demo-1126.png'}/>
          <Grid.Item text="文字2" icon={'https://b.yzcdn.cn/vant/icon-demo-1126.png'}/>
          <Grid.Item text="文字2" icon={'https://b.yzcdn.cn/vant/icon-demo-1126.png'}/>
          <Grid.Item text="文字2" icon={'https://b.yzcdn.cn/vant/icon-demo-1126.png'}/>
          <Grid.Item text="文字2" icon={'https://b.yzcdn.cn/vant/icon-demo-1126.png'}/>
          <Grid.Item text="文字2" icon={'https://b.yzcdn.cn/vant/icon-demo-1126.png'}/>
          <Grid.Item text="文字2" icon={'https://b.yzcdn.cn/vant/icon-demo-1126.png'}/>
          <Grid.Item text="文字2" icon={'https://b.yzcdn.cn/vant/icon-demo-1126.png'}/>
        </Grid>

        </Tabs.TabPane>
      </Tabs>

      <NumberKeyboard 
        theme="custom" 
        extraKey={['00', '.', '+', '-']} 
        closeButtonText="完成" 
        visible={true}
      />
    </>
  )
}
