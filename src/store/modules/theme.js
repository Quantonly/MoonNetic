const state = {
  theme: localStorage.theme ?? 'light'
}

const getters = {
  theme: state => state.theme
}

const actions = {
  async themeToggle ({ commit }, data) {
    if (data.theme === 'dark') {
      commit('SET_THEME', 'dark')
      document.documentElement.classList.add('dark')
    } else {
      commit('SET_THEME', 'light')
      document.documentElement.classList.remove('dark')
    }
  }
}

const mutations = {
  SET_THEME: (state, payload) => {
    localStorage.theme = payload
    state.theme = payload
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
