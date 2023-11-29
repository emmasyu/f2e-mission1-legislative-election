import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import './assets/main.css'

import * as currency from './filters/currency'

const app = createApp(App)

app.config.globalProperties.$filters = currency

app.use(createPinia())
app.use(router)

app.mount('#app')
