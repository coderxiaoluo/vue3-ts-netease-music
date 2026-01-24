import { createApp } from 'vue'
import App from './App.vue'
// 引入less style
import './assets/less/index.css'
// 引入主题色
import './theme/index.css'
// 清除默认样式
import 'normalize.css'
// element信息提示组件样式

import 'element-plus/theme-chalk/el-message.css'
import 'element-plus/dist/index.css'

// wow.js animate.css
import 'animate.css'
import 'animate.css/animate.compat.css'

// icon
import './assets/icon'

// Import Swiper styles
// Import Swiper styles
import 'swiper/css'
import 'swiper/css/effect-cards'

import 'swiper/css/pagination'
import 'swiper/css/navigation'

// store
import store from './stores'
// router
import router from './routes'

// 注册所有图标
import * as ElementPlusIconsVue from '@element-plus/icons-vue'

const app = createApp(App)
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component)
}

// video
import vue3videoPlay from 'vue3-video-play' // 引入组件
import 'vue3-video-play/dist/style.css' // 引入css

import '@/utils/console'
import particleExplosion from '@/utils/particleExplosion'

app.use(store)
app.use(router)
app.use(vue3videoPlay)
app.directive('particle-explosion', particleExplosion)
app.mount('#app')
