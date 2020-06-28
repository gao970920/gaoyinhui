/* jshint esversion:6 */
import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/home/book'
    },
    {
      path: '/home',
      component: resolve => require(['@/components/home/Home'], resolve),
      meta:{
        index:0
      },
      children:[
        {
          path:'book',
          name:'Book',
          component:resolve =>require(['@/components/home/children/Book'],resolve),
          meta:{
            index:0
          }
        },
        {
          path: 'fenlei',
          name: 'Fenlei',
          component: resolve => require(['@/components/home/children/Fenlei'], resolve),
          meta: {
            index: 1
          }
        },
        {
          path: 'pai',
          name: 'Pai',
          component: resolve => require(['@/components/home/children/Pai'], resolve),
          meta: {
            index: 2
          }
        },
        {
          path: 'search',
          name: 'Search',
          component: resolve => require(['@/components/home/children/Search'], resolve),
          meta: {
            index: 3
          }
        }
      ]
    }
  ]
});
