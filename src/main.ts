import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

// 导入 vant 组件
import vant from "vant"

// 导入 vant 样式
import 'vant/lib/index.css';

// 导入自己写的css
import "@/styles/base.css"

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(vant)

app.mount('#app')
