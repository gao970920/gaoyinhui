<template>
  <div class="sxm_container">
    <header class="sxm_header">
      <van-search
        v-model="sxmValue"
        placeholder="请输入搜索关键词"
        background="#26a2ff"
        @input="sxmSearch"
        @keydown.enter="sxmHotSearch"
      />
    </header>
    <!-- 滚动区域 -->
    <div class="sxm_content">
      <!-- 搜索内容自动补充 -->
      <div
        class="sxm_buchong"
        v-if="!sxmIsShow"
      >
        <ul>
          <li
            v-for="(item, index) in sxmBuChong"
            :key="index"
          >{{ item }}</li>
        </ul>
      </div>
      <!-- 搜索热词展示 -->
      <div
        class="sxm_hotList"
        v-if="sxmIsShow"
      >
        <ul>
          <li
            v-for="(item, index) in sxmHotWords"
            :key="index"
          >
            <img
              src="static/images/book.png"
              alt=""
            >
            <div>
              <h2>{{ item.word }}</h2>
            </div>
          </li>
        </ul>
      </div>
      <!-- 搜索历史 -->
      <div class="sxm_history" v-if="sxmBuChong.length<=0">
        <h2>
          <span>搜索历史</span>
          <i
            class="el-icon-delete"
            @click="sxmClear"
          ></i>
        </h2>
        <ul>
          <li
            v-for="(item, index) in sxmHistory"
            :key="index"
          >{{ item }}</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import Vue from 'vue';
import { Search, Toast } from 'vant';

Vue.use(Search);
Vue.use(Toast);
export default {
  name: '',
  data () {
    return {
      sxmValue: '',    // 搜索内容
      sxmBuChong: [],    // 搜索内容自动补充
      sxmHotWords: [],   // 搜索热词
      sxmIsShow: false,
      sxmHistory: JSON.parse(window.localStorage.getItem('history')) || []
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
    // 搜索内容自动补充
    sxmSearch () {
      if (this.sxmValue === '') {
        this.sxmIsShow = false
      }
      this.$http.get(`http://47.94.231.184/book/auto-complete?query=${this.sxmValue}`).then(res => {
        this.sxmBuChong = res.data.keywords
      })

    },
    // 按下确定键 
    sxmHotSearch () {
      // 添加搜索历史
      if (this.sxmValue) {
        let index = this.sxmHistory.findIndex(item => item == this.sxmValue)
        if (index == -1) {
          this.sxmHistory.push(this.sxmValue)
        }
        window.localStorage.setItem('history', JSON.stringify(this.sxmHistory))
        this.$http.get(`http://47.94.231.184/book/search-hotwords`).then(res => {
          this.sxmHotWords = res.data.searchHotWords
          this.sxmIsShow = true
        })
      } else {
        Toast.fail({
          message: '不能空搜索',
          duration: 1000
        });
      }

    },
    sxmClear () {
      for (let i = 0; i < this.sxmHistory.length; i++) {
        this.sxmHistory.splice(i, 1)
        i--
      }
      window.localStorage.setItem('history', JSON.stringify(this.sxmHistory))
    }
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
  color: #fff;
}
.sxm_buchong {
  ul {
    li {
      padding: 10px 16px;
      border-bottom: 1px solid #ddd;
      color: rgb(119, 118, 118);
    }
  }
}
.sxm_hotList {
  ul {
    li {
      padding: 6px 20px;
      border-bottom: 1px solid #ddd;
      display: flex;
      align-items: flex-start;
      img {
        width: 100px;
        margin-right: 10px;
      }
    }
  }
}
.sxm_history {
  padding: 10px 16px;
  h2 {
    height: 38px;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  ul {
    li {
      padding: 10px 0;
      border-bottom: 1px solid #ddd;
      color: rgb(195, 133, 79);
    }
  }
}
</style>