import { type App } from 'vue'
import Spinner from './install'
const components = [Spinner]
// 定义 install 方法，接收 Vue 作为参数。如果使用 use 注册插件，则所有的组件都将被注册
const install = function (app: App) {
  // 遍历注册全局组件
  components.forEach((component) => {
    app.component(component.name as string, component)
  })
}

export default {
  // 导出的对象必须具有 install，才能被 app.use() 方法安装
  install,
  Spinner,
}
