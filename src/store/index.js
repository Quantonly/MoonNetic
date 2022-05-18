import Vue from 'vue'
import Vuex from 'vuex'
import auth from './modules/auth'
import theme from './modules/theme'
import folder from './modules/folder'
import info from './modules/info'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    auth,
    theme,
    folder,
    info
  }
})
