<template>
  <div class="sxm_home">
    <section class="sxm_section">
      <transition :name="animate">
        <router-view></router-view>
      </transition>
    </section>
    <!-- 底部 Tabbar -->
    <Foote></Foote>
  </div>
</template>

<script>
import Foote from '@/components/common/Foote'
export default {
  name: '',
  data () {
    return {

    }
  },
  props: {
    animate: {
      type: String,
      default: ''
    }
  },
  computed: {
  },
  components: {
    Foote
  },
  mounted () {

  },
  methods: {

  },
}
</script>

<style lang='scss'>
.sxm_home {
  position: absolute;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  &>.sxm_section {
    flex: 1;
    position: relative;
  }
}
</style>