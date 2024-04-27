import { createApp } from 'vue'
import { createWebHistory } from 'vue-router'
import './style.css'
import createRouter from './pages/routes.js'
import App from './App.vue'
const router = createRouter(createWebHistory())
const app = createApp(App)
app.use(router).mount('#app')
