<template>
  <div
    class="sxm_container"
  >
  <header class="sxm_header">
    分类
  </header>
    <!-- 滚动区域 -->
    <div class="sxm_content">
      <div class="sxm_list">
        <h2>男生</h2>
        <ul>
          <li v-for="(item, index) in sxmList.male" :key="index">
            <p>{{ item.name }}</p>
            <p class="sxm_count">{{ item.bookCount }}</p>
          </li>
        </ul>
      </div>
      <div class="sxm_list">
        <h2>女生</h2>
        <ul>
          <li v-for="(item, index) in sxmList.female" :key="index">
            <p>{{ item.name }}</p>
            <p class="sxm_count">{{ item.bookCount }}</p>
          </li>
        </ul>
      </div>
      <div class="sxm_list">
        <h2>出版</h2>
        <ul>
          <li v-for="(item, index) in sxmList.press" :key="index">
            <p>{{ item.name }}</p>
            <p class="sxm_count">{{ item.bookCount }}</p>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: '',
  data () {
    return {
      sxmList:{}
    }
  },
  props: {

  },
  computed: {
  },
  components: {
  },
  mounted () {
    this.$http.get('http://47.94.231.184/cats/lv2/statistics').then(res=>{
      this.sxmList = res.data
      console.log(this.sxmList)
    })
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
    overflow: auto;
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
.sxm_list {
  padding: 0 16px;
  h2 {
    height: 36px;
    line-height: 36px;
    font-size: 15px;
    font-weight: 400;
    border-bottom: 1px solid #ddd;
  }
  ul {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    li {
      width: calc(100%/3);
      text-align: center;
      p {
        &:first-child {
          margin-top: 16px;
          font-size: 16px;
          font-weight: 700;
          color: #000;
        }
        &:last-child {
          margin-top: 10px;
          font-size: 16px;
          color: rgb(146, 145, 145);
        }
      }
    }
  }
}
</style>