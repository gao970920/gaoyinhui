<template>
<van-tabbar route>
  <van-tabbar-item replace to="/home/book" icon="wap-home-o">
    书架
  </van-tabbar-item>
  <van-tabbar-item replace to="/home/fenlei" icon="apps-o">
    分类
  </van-tabbar-item>
    <van-tabbar-item replace to="/home/pai" icon="bar-chart-o">
    排行
  </van-tabbar-item>
    <van-tabbar-item replace to="/home/search" icon="search">
    搜索
  </van-tabbar-item>
</van-tabbar>
</template>

<script>
import Vue from 'vue';
import { Tabbar, TabbarItem } from 'vant';

Vue.use(Tabbar);
Vue.use(TabbarItem);
export default {
  name: '',
  data () {
    return {
      sxmFooter: [
        {
          title: '首页',
          inactive: 'static/images/home.png',
          active: 'static/images/home-active.png',
          to: '/home'
        },
      ]
    }
  },
  props: {

  },
  computed: {
  },
  components: {
  },
  mounted () {

  },
  methods: {

  },
}
</script>

<style scoped lang='scss'>
</style>