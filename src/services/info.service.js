import http from '../http.js'

export class InfoService {
  static setStoragePermissions () {
    return http.post('/setstoragepermissions')
  }

  static deleteWebsite () {
    return http.get('deletewebsite')
  }

  static createWebsite (data) {
    return http.post('/createwebsite', {
      subDomain: data.subDomain,
      phpVersion: data.phpVersion
    })
  }

  static getWebsites () {
    return http.get('/getwebsites')
  }

  static getSFTP () {
    return http.get('/getsftp')
  }

  static getPHP () {
    return http.get('/getphp')
  }
}
