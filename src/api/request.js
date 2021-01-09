import axios from 'axios'
import { emitWarningNotification } from '../util/helper'

// create axios service
const service = axios.create({
  baseURL: 'http://158.132.20.116:8080',
  timeout: 15000
})

// intercept request
service.interceptors.request.use(config => {
  config.headers['Content-Type'] = 'application/json'
  return config
}, error => {
  emitWarningNotification('Request Error', error.message)
  Promise.reject(error)
  throw error
})

// intercept response
service.interceptors.response.use(response => {
  return response.data
}, error => {
  emitWarningNotification('Response Error', error.message)
  throw error
  // return Promise.reject(error)
})

export default service
