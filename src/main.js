import Vue from 'vue'
import App from './App.vue'
import Vuelidate from 'vuelidate'
import router from './router'
import store from './store'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faHome, faCaretDown, faFolder, faFileShield, faDatabase, faArrowRightArrowLeft, faTerminal, faAngleRight, faFileCode, faArrowUpShortWide, faSearch, faAngleDown, faPlus } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import VuePageTitle from 'vue-page-title'

import './assets/styles/index.scss'
import 'flowbite'

if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
  document.documentElement.classList.add('dark')
} else {
  document.documentElement.classList.remove('dark')
}

library.add(faHome, faCaretDown, faFolder, faFileShield, faDatabase, faTerminal, faArrowRightArrowLeft, faAngleRight, faFileCode, faArrowUpShortWide, faSearch, faAngleDown, faPlus)

Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.use(VuePageTitle, {
  suffix: '- MoonNetic'
})

Vue.use(Vuelidate)

Vue.config.productionTip = false

async function main () {
  if (store.getters.accessToken && !store.getters.user) {
    await store.dispatch('getUser')
  }

  new Vue({
    router,
    store,
    render: h => h(App)
  }).$mount('#app')
}

main()
