import Vue from 'vue'
import Vuex from 'vuex'
import auth from './modules/auth'
import theme from './modules/theme'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    auth,
    theme
  }
})
