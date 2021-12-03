import { NavBar, ConfigProvider } from 'react-vant'

// css是跟RN一样的思维，用一个容器去集中管理
const themeVars = {
  '--rv-nav-bar-background-color': "rgb(246, 130, 115)",
  '--rv-nav-bar-title-text-color': "#fff"
}

export default function Nav_ () {
  return (
    <ConfigProvider themeVars={themeVars}>
      <NavBar
        title="钱多多"
        // leftArrow
        // rightText="按钮"
        // onClickLeft={() => Toast.info('返回')}
        // onClickRight={() => Toast.info('按钮')}
      />
    </ConfigProvider>
  )
}