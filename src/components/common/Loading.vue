<template>
<section class="loading">
    <img src="static/images/loading.gif" alt="">
</section>
</template>

<script>
export default {
  name: '',
  data() { 
    return {

    }
  },
  props: {

  },
  components:{
  },
  mounted() {

  },
  methods:{

  },
 }
</script>

<style scoped>
.loading {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    /* background: rgba(0,0,0,.5); */
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 500;
}
</style>