<template>
  <div id="app">
    <section>
      <transition :name="animate">
        <router-view :animate="animate"></router-view>
      </transition>
    </section>

    <!-- Loading 请求数据时 显示或隐藏 -->
    <Loading v-if="isLoading" />
  </div>
</template>

<script>
export default {
  name: "App",
  data () {
    return {
      animate: ''
    }
  },
  computed: {
    isLoading () {
      return this.$store.state.isLoading;
    }
  },
  mounted () {
  },
  watch: {
    $route: {
      deep: true,
      handler (to, from) {
        if (to.meta.index > from.meta.index) {
          this.animate = 'slide-left'
        } else {
          this.animate = 'slide-right'
        }
      }
    }
  },
  methods: {
    // 阻止默认事件
    addPrevent () {
      //阻止浏览器自带的touchmove事件
      document.addEventListener(
        "touchmove",
        function (ev) {
          ev.preventDefault();
        },
        {
          passive: false
        }
      );
    }
  }
};
</script>

<style lang="scss">
@import 'element-ui/lib/theme-chalk/index.css';
@import 'swiper/css/swiper.min.css';
* {
  font-size: 12px;
}
html,
body,
#app {
  height: 100%;
  margin: 0;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  display: flex;
  flex-direction: column;
  & > section {
    flex: 1;
    position: relative;
  }
}
/* 路由转场动画 */
.slide-right-enter-active,
.slide-right-leave-active,
.slide-left-enter-active,
.slide-left-leave-active {
  will-change: transform;
  transition: all 500ms;
  position: absolute;
}

.slide-right-enter {
  opacity: 0;
  transform: translate3d(-100%, 0, 0);
}

.slide-right-leave-active {
  opacity: 0;
  transform: translate3d(100%, 0, 0);
}

.slide-left-enter {
  opacity: 0;
  transform: translate3d(100%, 0, 0);
}

.slide-left-leave-active {
  opacity: 0;
  transform: translate3d(-100%, 0, 0);
}
</style>
