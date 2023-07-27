import axios from 'axios';
import { ElMessage } from 'element-plus';

// 创建 axios 实例
let request = axios.create({
  //基础路径
  baseURL: import.meta.env.VITE_APP_BASE_API, //基础路径上会携带/api
  timeout: 5000, //超时的时间的设置
})

// 请求拦截器
request.interceptors.request.use(config => {
  return config
})

// 响应拦截器
request.interceptors.response.use(response => {
  return response.data
}, error => {
  //失败回调:处理http网络错误的
  //定义一个变量:存储网络错误信息
  let message = ''
  //http状态码
  const status = error.response.status
  switch (status) {
    case 401:
      message = 'TOKEN过期'
      break
    case 403:
      message = '无权访问'
      break
    case 404:
      message = '请求地址错误'
      break
    case 500:
      message = '服务器出现问题'
      break
    default:
      message = '网络出现问题'
      break
  }
  //提示错误信息
  ElMessage({
    type: 'error',
    message,
  })
  return Promise.reject(error)
})

export default request