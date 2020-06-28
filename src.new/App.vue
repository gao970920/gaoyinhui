<template>
  <div id="app">
    <img src="./assets/logo.png">
    <!-- 动画 -->
    <transition name="slide-left" mode="">
      <router-view/>
  </transition>
  </div>
</template>

<script>
export default {
  name: 'App',
  data () {
    return {
      
    }
  },
  computed: {
    
  },
  methods: {
    
  },
  
}

</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
