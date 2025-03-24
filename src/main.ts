import { createApp } from 'vue'
import Linking from 'linking-kwy'
import 'linking-kwy/bundle/linking-kwy.css'
import App from './App.vue'

const app = createApp(App)
app.use(Linking)
app.mount('#app')
