import request from './request'

export function queryBalanceSum (params) {
  return request({
    baseURL: 'http://mock.51y.cc:81/mock/5ff56b45b6d08659433b7aaf/fe',
    url: '/balance/sum/',
    method: 'post',
    params
  })
}

export function queryBalanceRecords (params) {
  return request({
    baseURL: 'http://mock.51y.cc:81/mock/5ff56b45b6d08659433b7aaf/fe',
    url: '/balance/records/',
    method: 'post',
    params
  })
}
