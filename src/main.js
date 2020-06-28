// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
/* jshint esversion:6 */
import Vue from 'vue';
import App from './App';
import router from './router';
import store from './store';
import ElementUI from 'element-ui';
import Loading from '@/components/common/Loading';
import axios from '@/http/http.js';
// import { config } from 'shelljs';
import '../static/css/reset.css'
Vue.config.productionTip = false;
Vue.use(ElementUI);
/*=======================================================================*/
//全局引入 axios
Vue.prototype.$http = axios;
//全局组件  Loading
Vue.component('Loading',Loading);
/*=======================================================================*/
//请求拦截器
axios.interceptors.request.use(
  config=>{
    store.commit('changeLoading',true);
    return config;
  },
  error=>{
    return Promise.error(error);
  }
);
//响应拦截器
axios.interceptors.response.use(
  response => {
    // 如果返回的状态码为200，说明接口请求成功，可以正常拿到数据
    // 否则的话抛出错误
    if (response.status === 200) {
    store.commit('changeLoading',false);
    return Promise.resolve(response);
    } else {
      return Promise.reject(response);
    }
  },
  error => {
      return Promise.reject(error.response);
  }
);
/*=======================================================================*/
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
});
