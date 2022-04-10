import http from '../http.js'
import qs from 'query-string'

export class FileService {
  static downloadFile (data) {
    return http.post('/file', qs.stringify({
      path: data
    }), {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      responseType: 'blob'
    })
  }

  static readFile (data) {
    return http.post('/readfile', qs.stringify({
      path: data
    }), {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      responseType: 'blob'
    })
  }
}
