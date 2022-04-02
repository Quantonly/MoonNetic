import axios from 'axios'
import store from '@/store'

const apiClient = axios.create({
  baseURL: process.env.VUE_APP_API,
  headers: {
    accept: 'application/json'
  }
})

apiClient.interceptors.request.use((config) => {
  if (store.state.auth.auth.accessToken) {
    config.headers.Authorization = `Bearer ${store.state.auth.auth.accessToken}`
  }

  return config
})

apiClient.interceptors.response.use((response) => {
  return response
}, (error) => {
  if (error.response.status === 401 && error.response.data.message === 'Unauthenticated') store.dispatch('refresh')
  else if (error.response.data.message === 'Token expired') store.dispatch('expiredLogout')
})

export default apiClient
