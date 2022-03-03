import axios, { AxiosRequestConfig, AxiosRequestHeaders, AxiosResponse } from "axios";
import { useUserStore } from '../store/store'
import { showMessage } from './status'
import { Toast } from 'vant';

//请求时间
axios.defaults.timeout = 5000;
axios.defaults.baseURL = 'https://api.shop.eduwork.cn/';

//请求拦截器
axios.interceptors.request.use(
  (config: AxiosRequestConfig) => {
    const UserStore = useUserStore()
    if (UserStore.USERNAME) {
      (config.headers as AxiosRequestHeaders).Authorization = `Bearer ${UserStore.USERNAME}`
    } 
    return config
  }, error => {
    return Promise.reject(error)
  }
)

//响应拦截
axios.interceptors.response.use(
  (response : AxiosResponse<any>) => { 
    return response
  }, error => {
    const { response } = error
    if (response) {
      Toast(showMessage(response.status))
      return Promise.reject(response.data)
    } else {
      return `请联系网络管理员`
    }
  }
)

//封装request请求
export function request(url='',params={},type="POST") {
  return new Promise((resolve, reject) => {
    let promise;
    if (type.toUpperCase() === 'GET') {
      promise = axios({
        url,
        params,
        method:'GET'
      })
    } else if (type.toUpperCase() === 'POST') {
      promise = axios({
        url,
        data: params,
        method:'POST'
      })
    }
    promise?.then((res) => {
      resolve(res)
    }).catch((err) => {
      reject(err)
    })
  })
}

