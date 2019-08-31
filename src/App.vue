<template>
  <div class="app">
    <router-view></router-view>
    <FooterGuide></FooterGuide>
  </div>
</template>

<script>
import FooterGuide from './components/FooterGuide/FooterGuide.vue'
export default {
  components:{
    FooterGuide,
  }
}
</script>

<style lang='stylus' rel="stylesheet/stylus">
@import './common/stylus/index.styl'
  .app
    width 100%
    height 100%
    background-color yellow
</style>
