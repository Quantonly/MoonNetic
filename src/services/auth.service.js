import http from '../http.js'
import qs from 'query-string'

export class AuthService {
  static login (data) {
    return http.post('/auth/login', qs.stringify({
      email: data.email,
      password: data.password
    }), {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      }
    })
  }

  static getUser () {
    return http.get('/auth/user')
  }

  static logout () {
    return http.get('/auth/logout')
  }

  static refresh () {
    return http.get('/auth/refresh')
  }

  static forgotPassword (data) {
    return http.post('/auth/forgot', {
      email: data.email
    })
  }

  static resetPassword (data) {
    return http.post('/auth/update', {
      password: data.password,
      passwordToken: data.passwordToken
    })
  }
}