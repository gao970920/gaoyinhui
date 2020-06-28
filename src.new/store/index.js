import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'


Vue.use(Vuex)


export default new Vuex.Store({
    //储存全局状态的
    state:{
        count:1000,
        todoList:[], //全局状态的空数组

    },
    mutations:{
      
    },
    //计算属性
   getters:{
      
   },
   //异步操作集合
   actions:{
  
   },
    plugins: [createPersistedState()]
})