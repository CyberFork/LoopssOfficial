<template>
  <div id="app">
    <headers />
    <router-view/>
    <footers />
  </div>
</template>

<script>
import Headers from '@/components/Headers'
import Footers from '@/components/Footers'

export default {
  name: 'app',
  components: {
    Headers,
    Footers
  },
  mounted(){
    this.$store.dispatch('SetScreen', {
      width: document.documentElement.clientWidth,
      height: document.documentElement.clientHeight
    })
    window.onresize = () => {
      this.$store.dispatch('SetScreen', {
        width: document.documentElement.clientWidth,
        height: document.documentElement.clientHeight
      })
    }
  }
}
</script>

<style lang="less">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  height: 100%;
  overflow: auto;
}
</style>
