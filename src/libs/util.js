import axios from 'axios';
import env from '../config/env';
import store from '@/store'
import { getToken } from '@/api/user.js'

let util = {
};
util.title = function(title) {
    title = title ? title + ' - Home' : 'iView project';
    window.document.title = title;
};

const ajaxUrl = env === 'development' ?
    'http://homestead.test' :
    env === 'production' ?
    'http://api.kongry.top:8083' :
    'http://homestead.test';

util.ajax = axios.create({
    baseURL: ajaxUrl,
    timeout: 30000
});
// 添加request拦截器 
util.ajax.interceptors.request.use(config => {
    if (store.getters.token) {
        config.headers['X-Token'] = getToken() // 让每个请求携带token--['X-Token']为自定义key 请根据实际情况自行修改
    }
    return config;
}, error => {
    Promise.reject(error);
});
// 添加respone拦截器
util.ajax.interceptors.response.use(                  
    response => {
        let res={}; 
        res.status=response.status;
        res.data=response.data;
        return res;
    },
    error => {
        if(error.response && error.response.status == 404){
            router.push('/blank.vue');
        }
     
          
        return Promise.reject(error.response);
    }
);

export function get(url, params = {}) {
    params.t = new Date().getTime(); //get方法加一个时间参数,解决ie下可能缓存问题.
    return service({
        url: url,
        method: 'get',
        headers: {     
        },
        params
    });
}

//封装post请求
export function post(url, data = {}) { 
    //默认配置 
      let sendObject={
          url: url,
          method: 'post',
          headers: {
              'Content-Type':'application/json;charset=UTF-8'       
          },
          data:data
      };
      sendObject.data=JSON.stringify(data);
      return service(sendObject);
  }

export default util;