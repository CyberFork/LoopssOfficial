<template>
  <footer>
    <div class="flex-box">
      <div class="left">
        <img class="icon" src="@/assets/img/logo_rect.png" />
        <span>FOLLOW ME</span>
        <span v-if="!isMobile">
          <a class="item-img" v-for="(item, i) in abouts" :key="i" :href="item.href">
            <img :src="item.icon" alt="">
          </a>
        </span>
      </div>
      <div class="right">
        <a v-for="(item, i) in navs" :key="i" :href="item.href">{{item.title}}</a>
      </div>
    </div>
    <div v-if="isMobile">
      <a class="item-img" v-for="(item, i) in abouts" :key="i" :href="item.href">
        <img :src="item.icon" alt="">
      </a>
    </div>
  </footer>
</template>

<script>
  export default {
    name: "Footers",
    data() {
      return {
        abouts: [{
          icon: require('../assets/img/bird.png'),
          href: ''
        }, {
          icon: require('../assets/img/twiter.png'),
          href: ''
        }, {
          icon: require('../assets/img/discord.png'),
          href: ''
        }],
        navs: [{
          title: '加入社区',
          href: ''
        }, {
          title: '相关文档',
          href: ''
        }]
      }
    },
    computed: {
      isMobile() {
        return this.$store.state.isMobile
      }
    }
  }
</script>

<style>

</style>