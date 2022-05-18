import { InfoService } from '../../services/info.service.js'

const state = {
  info: {
    sftp: [],
    php: []
  }
}

const getters = {
  sftp: state => state.info.sftp.info,
  php: state => state.info.php.info
}

const actions = {
  async getSFTP ({ commit }) {
    await InfoService.getSFTP().then(response => {
      commit('SET_SFTP', response.data)
    })
  },
  async getPHP ({ commit }) {
    await InfoService.getPHP().then(response => {
      commit('SET_PHP', response.data)
    })
  }
}

const mutations = {
  SET_SFTP: (state, payload) => {
    state.info.sftp = payload
  },
  SET_PHP: (state, payload) => {
    state.info.php = payload
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
