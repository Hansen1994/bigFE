// 封装axios的请求，返回重新封装的数据格式
// 对错误的统一处理
import axios from 'axios'
import errorHandle from './errorHandle.js'

class HttpRequest {
  constructor(baseUrl) {
    this.baseUrl = baseUrl
  }
  getInsideConfig () {
    const config = {
      baseURL: this.baseUrl,
      headers : {
        'Content-Type': 'application/json;charset=utf-8'
      },
      timeout: 10000
    }
    return config;
  }
  // 设定拦截器
  interceptors(instance) {
    // 请求拦截
    instance.interceptors.request.use(function (config){
      return config
    }, function (error) {
      errorHandle(error)
      return Promise.reject(error)
    })

    // 增加响应拦截
    instance.interceptors.response.use(function (res) {
      if (res.status === 200){
        return Promise.resolve(res.data)
      } else {
        return Promise.reject(res)
      }
    }, function(error){
      errorHandle(error)
      return Promise.reject(error)
    })
  }
  // 创建实例
  request (options) {
    const instance = axios.create()
    const newOptions = Object.assign(this.getInsideConfig(), options)
    this.interceptors(instance)
    return instance.request(newOptions)
  }
  // get方法
  get (url, config) {
    const options = Object.assign({
      method: 'get',
      url: url
    }, config)
    return this.request(options)
  }
  // post方法
  post (url, data) {
    return this.request({
      method: 'post',
      url: url,
      data: data
    })
  }
}



export default HttpRequest