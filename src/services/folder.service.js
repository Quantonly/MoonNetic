import http from '../http.js'

export class FolderService {
  static getFiles () {
    return http.get('/folder')
  }
}
