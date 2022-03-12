import axios from "axios";
import { ElMessage } from "element-plus";

axios.defaults.timeout = 60000;

// axios.defaults.baseURL = ''

// 请求拦截
axios.interceptors.request.use(
  (config) => {
    config.headers = {
      "Content-Type": "application/json;charset=UTF-8",
      // 'token':''
    };
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// 响应拦截
axios.interceptors.response.use(
  (res) => {
    return res.data;
  },
  (error) => {
    ElMessage.warning(error);
  }
);

export default function _ajax(url = "", params = {}, type = "GET") {
  return new Promise((resolve, reject) => {
    let promise;
    if (type.toUpperCase() === "GET") {
      promise = axios({
        url,
        params,
      });
    } else if (type.toUpperCase() === "POST") {
      promise = axios({
        method: "POST",
        url,
        data: params,
      });
    }
    promise
      ?.then((res) => {
        resolve(res);
      })
      .catch((err) => {
        reject(err);
      });
  });
}
