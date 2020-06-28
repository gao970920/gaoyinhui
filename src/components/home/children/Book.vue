<template>
  <div
    class="sxm_container"
  >
  <header class="sxm_header">
    书架
  </header>
    <!-- 滚动区域 -->
    <div class="sxm_content">
      <h1>添加小说</h1>
    </div>
  </div>
</template>

<script>
export default {
  name: '',
  data () {
    return {
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
.sxm_container {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 50px;
  display: flex;
  flex-direction: column;
  .sxm_content {
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
  }
}
.sxm_header {
  width: 100%;
  height: 40px;
  line-height: 40px;
  text-align: center;
  background-color: #26a2ff;
  color: #fff;
}
h1 {
  width: 100px;
  height: 40px;
  line-height: 40px;
  text-align: center;
  border-radius: 4px;
  background-color: #26a2ff;
  color: #fff;
}
</style>