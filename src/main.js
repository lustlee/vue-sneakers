import './assets/main.css'

import { createApp } from 'vue'
import { autoAnimatePlugin } from '@formkit/auto-animate/vue'
import { createRouter, createWebHistory } from 'vue-router'

import App from './App.vue'
import Home from '@/pages/Home.vue'
import Favorites from '@/pages/Favorites.vue'
import Profile from '@/pages/Profile.vue'
import NotFound from '@/pages/NotFound.vue'

const app = createApp(App)

const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/favorites', name: 'Favorites', component: Favorites },
  { path: '/profile', name: 'Profile', component: Profile },

  {path: '/:pathMatch(.*)*', name: 'NotFound', component: NotFound}
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

app.use(router)
app.use(autoAnimatePlugin)
app.mount('#app')