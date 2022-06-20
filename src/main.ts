import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import handleIcons from '@/icons/index'
import '@/app.scss'

import BScroll, { ScrollBar, MouseWheel } from "better-scroll"

const app = createApp(App)

handleIcons(app)
BScroll.use(ScrollBar)
BScroll.use(MouseWheel)

app.use(router).mount('#app')
