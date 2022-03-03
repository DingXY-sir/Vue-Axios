//管理接口返回状态码
export const showMessage = (status: string | number): string => {
  let message:string = ""
  switch (status) {
    case 400:
      message = '请求错误（400）';
      break;
    case 401:
      message = '尚未授权，请重新登陆（401）';
      break;
    case 403:
      message = '拒绝访问（403）';
      break;
    case 404:
      message = '请求出错（404）';
      break;
    case 422:
      message = '请求参数错误（422）'
      break;
    default:
      message = `链接出错${status}`
  }
  return `${message}，请联系相关人员！`
}