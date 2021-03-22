<template>
  <header :class="{'mobile-head': isMobile}">
    <router-link to="/">
      <img class="logo" src="@/assets/img/logo.png" alt="loopss" />
    </router-link>
    <img class="nav-btn" v-if="isMobile && !showNav" src="@/assets/img/menu.png" @click="showNav = true"/>
    <img class="nav-btn" v-if="isMobile && showNav" src="@/assets/img/close.png"  @click="showNav = false" />
    <nav v-if="!isMobile || (isMobile && showNav)">
      <a v-for="(item, i) in navArr" :key="i" :href="item.href" @click="showNav = false">{{item.title}}</a>
    </nav>
  </header>
</template>

<script>
export default {
  name: 'headers',
  data(){
    return {
      showNav: false,
      navArr: [{
        title: '介绍',
        href: '#'
      }, {
        title: '产品',
        href: '#'
      }, {
        title: '社区',
        href: '#'
      }, {
        title: '招募',
        href: '#'
      }, {
        title: '社交挖矿',
        href: '#'
      },]
    }
  },
  computed: {
    isMobile(){
      return this.$store.state.isMobile
    }
  }
}
</script>

<style>

</style>