/*
 * @Author: DXY <Jim1020_job@163.com>; 
 * @Date: 2022-02-10 11:24:31 
 * @Last Modified by: DXY <Jim1020_job@163.com>
 * @Last Modified time: 2022-02-14 13:57:33
 */
//接口API统一管理
import { request } from './axios'
export class UserAuth {
  static async register(params:object) {
    return request('api/auth/login',params,'post')
  }
}

