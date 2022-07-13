import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import handleIcons from '@/icons/index'
import '@/app.scss'
import '@/assets/style/index.scss'

import BScroll, { ScrollBar, MouseWheel } from "better-scroll"
import { Quasar } from 'quasar'
import quasarUserOptions from './quasar-user-options'

const app = createApp(App).use(Quasar, quasarUserOptions)

handleIcons(app)
BScroll.use(ScrollBar)
BScroll.use(MouseWheel)

app.use(router).mount('#app')
