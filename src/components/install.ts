import { type App } from 'vue'
import Spinner from './Spinner.vue'
Spinner.install = function (app: App) {
  app.component(Spinner.name as string, Spinner)
}
export default Spinner
