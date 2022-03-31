import { createApp } from 'vue'
import { createPinia } from 'pinia'
import * as VueRouter from "vue-router"
import App from './App.vue'
import Home from './components/Home.vue'
import About from './components/About.vue'
import Blocks from './components/Blocks.vue'
import Items from './components/Items.vue'
import Recepes from './components/Recepes.vue'
import LoginWindow from './components/LoginWindow.vue'


const routes = [
    { path: '/', component: Home },
    { path: '/about', component: About },
    { path: '/blocks', component: Blocks },
    { path: '/items', component: Items },
    { path: '/recepes', component: Recepes},
    { path: '/loginWindow', component: LoginWindow},
  ]
  const router = VueRouter.createRouter({
    // 4. Provide the history implementation to use. We are using the hash history for simplicity here.
    history: VueRouter.createWebHashHistory(),
    routes, // short for `routes: routes`
  })
const app = createApp(App)
app.use(createPinia())
app.use(router)
app.mount('#app')
