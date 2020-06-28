/* jshint esversion:6 */
import Vue from 'vue';
import Vuex from 'vuex';
import createPersistedState from 'vuex-persistedstate';
Vue.use(Vuex);
let store = new Vuex.Store({
    state:{
        isLoading:false
    },
    mutations:{
        //loading组件 获取数据加载操作
        changeLoading(state,bool){
            state.isLoading = bool;
        }
    },
    plugins: [createPersistedState()] //数据持久化
});
export default store;