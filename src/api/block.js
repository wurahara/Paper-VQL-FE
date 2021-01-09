import request from './request'

export function queryBlockByHash (hash) {
  return request({
    // baseURL: 'http://mock.51y.cc:81/mock/5ff56b45b6d08659433b7aaf/fe',
    url: '/block/hash/' + hash,
    method: 'get'
  })
}

export function queryBlockByNum (num) {
  return request({
    // baseURL: 'http://mock.51y.cc:81/mock/5ff56b45b6d08659433b7aaf/fe',
    url: '/block/number/' + num,
    method: 'get'
  })
}
