import axios from 'axios'

// create axios service
const service = axios.create({
  baseURL: process.env.baseURL,
  timeout: 15000
})

// intercept request
service.interceptors.request.use(config => {
  config.headers['Content-Type'] = 'application/json'
  return config
}, error => {
  console.log(error)
  Promise.reject(error)
})

// intercept response
service.interceptors.response.use(response => {
  // const res = response.data
  // if (res.code !== 200) {
  //   console.log('Response error occured.')
  //   return Promise.reject(new Error('Response error'))
  // } else {
  //   return response.data
  // }
  return response.data
}, error => {
  console.log(error)
  return Promise.reject(error)
})

export default service
