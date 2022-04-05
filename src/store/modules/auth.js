import { AuthService } from '../../services/auth.service.js'

const state = {
  auth: {
    user: null,
    roles: null,
    accessToken: localStorage.accessToken ?? null
  }
}

const getters = {
  accessToken: state => state.auth.accessToken,
  roles: state => state.auth.roles,
  user: state => state.auth.user
}

const actions = {
  async login ({ commit }, data) {
    await AuthService.login(data).then(response => {
      commit('SET_AUTH', response.data)
      commit('SET_USER', response.data)
    })
  },
  async getUser ({ commit }) {
    AuthService.getUser().then(response => {
      if (response) {
        commit('SET_USER', response.data)
      }
    })
  },
  async refresh ({ commit, dispatch }) {
    AuthService.refresh().then(response => {
      commit('SET_AUTH', response.data)
      dispatch('getUser')
    })
  },
  async forgotPassword ({ commit }, data) {
    await AuthService.forgotPassword(data)
  },
  async resetPassword ({ commit }, data) {
    await AuthService.resetPassword(data)
  },
  async logout ({ commit }) {
    await AuthService.logout().then(() => {
      commit('CLEAR_AUTH')
    })
  },
  async expiredLogout ({ commit }) {
    commit('CLEAR_AUTH')
    location.reload()
  }
}

const mutations = {
  SET_AUTH: (state, payload) => {
    localStorage.setItem('accessToken', payload.access_token)
    state.auth.accessToken = payload.access_token
  },
  SET_USER: (state, payload) => {
    state.auth.user = payload.user
    state.auth.roles = payload.roles
  },
  CLEAR_AUTH: (state) => {
    localStorage.removeItem('accessToken')
    state.auth.user = null
    state.auth.roles = null
    state.auth.accessToken = null
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
