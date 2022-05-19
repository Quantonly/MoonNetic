import { InfoService } from '../../services/info.service.js'

const state = {
  websites: [],
  info: {
    sftp: [],
    php: []
  }
}

const getters = {
  websites: state => state.websites,
  sftp: state => state.info.sftp.info,
  php: state => state.info.php.info
}

const actions = {
  async getWebsites ({ commit }) {
    await InfoService.getWebsites().then(response => {
      commit('SET_WEBSITES', response.data)
    })
  },
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
  SET_WEBSITES: (state, payload) => {
    state.websites = payload
  },
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
