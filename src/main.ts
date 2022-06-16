import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import handleIcons from '@/icons/index'

const app = createApp(App)

handleIcons(app)
app.use(router).mount('#app')
