import request from './request'

export function queryTransaction (params) {
  return request({
    baseURL: 'http://mock.51y.cc:81/mock/5ff56b45b6d08659433b7aaf/fe',
    url: '/transaction/',
    method: 'post',
    params
  })
}
