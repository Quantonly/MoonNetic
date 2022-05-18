import http from '../http.js'

export class InfoService {
  static getSFTP () {
    return http.get('/getsftp')
  }

  static getPHP () {
    return http.get('/getphp')
  }
}
