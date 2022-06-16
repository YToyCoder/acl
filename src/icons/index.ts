import Icon from '@/components/icon/index.vue'
import { App } from 'vue'

export default function handleIcons(app: App) {
  app.component('icon', Icon)
  const req = require.context('./svg', false, /\.svg$/)
  req.keys().map(req)
}
