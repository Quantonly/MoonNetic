import http from '../http.js'
import qs from 'query-string'

export class FileService {
  static uploadFile (formData) {
    return http.post('/upload', formData, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    })
  }

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

  static createFolder (data) {
    return http.post('/createfolder', {
      newFileName: data.newFileName
    })
  }

  static createFile (data) {
    return http.post('/createfile', {
      newFileName: data.newFileName
    })
  }

  static renameFile (data) {
    return http.post('/renamefile', {
      oldFileName: data.oldFileName,
      newFileName: data.newFileName
    })
  }

  static deleteFiles (data) {
    return http.post('/deletefiles', qs.stringify({
      'fileNames[]': data.fileNames
    }))
  }

  static editFile (data) {
    return http.post('/editfile', {
      path: data.path,
      content: data.content
    })
  }
}
