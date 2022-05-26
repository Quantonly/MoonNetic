import { FolderService } from '../../services/folder.service.js'

const state = {
  folder: {
    directories: null,
    files: null
  },
  subDomain: null
}

const getters = {
  rootDirectories: state => state.folder.directories.filter(directory => (directory.split('/').length === 1)),
  directories: state => state.folder.directories,
  files: state => state.folder.files,
  subDomain: state => state.subDomain
}

const actions = {
  async getFiles ({ commit }) {
    await FolderService.getFiles().then(response => {
      commit('SET_FOLDER', response.data)
    })
  }
}

const mutations = {
  SET_FOLDER: (state, payload) => {
    state.folder.directories = payload.directories
    state.folder.files = payload.files
    state.subDomain = payload.subDomain
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
