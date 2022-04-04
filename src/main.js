import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faHome } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import VuePageTitle from 'vue-page-title'

import './assets/styles/index.scss'
import 'flowbite'

if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
  document.documentElement.classList.add('dark')
} else {
  document.documentElement.classList.remove('dark')
}

library.add(faHome)

Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.use(VuePageTitle, {
  suffix: '- MoonNetic'
})

Vue.config.productionTip = false

async function main () {
  new Vue({
    router,
    store,
    render: h => h(App)
  }).$mount('#app')
}

main()
