<template>
  <div id="home">
    <div class="banner">
      <div class="div">
        <div class="title">
          <span class="first">Web3.0</span>
          <span>去中心化社会关系</span>
        </div>
        <div class="content" v-if="!isMobile">
          为 DAOs 、社交代币、Web3 社交网络在区块链上建立可验证的社会关系。任何人可以使用 LOOP 基于社会关系的代币分发、治理、权限与金库管理，进化为社区化资本与 DAOs
        </div>
        <div class="btn-wrap">
          <div class="btn primary">开始使用</div>
        </div>
      </div>
    </div>
    <div class="module helps">
      <div class="title"><span class="text">如何使用</span></div>
      <div class="sub-title">通过「授信」建立社会关系</div>
      <div class="content">
        <div class="c-item" v-for="(item, i) in helps" :key="i">
          <img class="icon" :src="item.icon" alt="">
          <div class="c-title">{{item.title}}</div>
          <div class="c-content" v-if="!isMobile" v-html="item.content"></div>
        </div>
      </div>
    </div>
    <div class="module production">
      <div class="title"><span class="text">社会关系下一步，生产网络</span></div>
      <div class="content" v-if="isMobile">
        <div class="c-item" v-for="(item, i) in production" :key="i">
          <img class="icon" :src="item.icon" :alt="item.title">
          <div class="cont">
            <div class="c-title">{{item.title}}<span v-if="isMobile">：</span></div>
            <div class="c-content">{{item.content}}</div>
            <a class="btn" :class="item.btn.className" :href="item.btn.href">
              {{item.btn.title}}
            </a>
          </div>
        </div>
      </div>
      <div class="content" v-else>
        <div class="c-item" v-for="(item, i) in production" :key="i">
          <img class="icon" v-if="!i % 2" :src="item.icon" :alt="item.title">
          <div class="cont">
            <div class="c-title">{{item.title}}<span v-if="isMobile">：</span></div>
            <div class="c-content">{{item.content}}</div>
            <a class="btn" :class="item.btn.className" :href="item.btn.href">
              {{item.btn.title}}
            </a>
          </div>
          <img class="icon" v-if="i % 2 === 1" :src="item.icon" :alt="item.title">
        </div>
      </div>
    </div>
    <div class="module blogs" v-if="blogs && blogs.length">
      <div class="title"><span class="text">博客</span></div>
      <div class="content">
        <div class="c-item" v-for="(item, i) in blogs" :key="i"></div>
      </div>
    </div>
    <div class="module partners">
      <div class="title"><span class="text">合作伙伴</span></div>
      <div class="content">
        <div class="c-item" v-for="(item, i) in partners" :key="i" :style="{backgroundImage: `url(${item.icon})`}"></div>
      </div>
    </div>
  </div>
</template>

<script>
  // @ is an alias to /src

  export default {
    name: 'Home',
    components: {},
    data() {
      return {
        helps: [{
          icon: require('@/assets/img/trust.png'),
          title: '基于授信',
          content: '对朋友、组织、合约发起授信，在链上建立你的关系'
        }, {
          icon: require('@/assets/img/mining.png'),
          title: '社交挖矿',
          content: '被纳入更多社交网络，你的信用就更有价值，收获 $LOOP'
        }, {
          icon: require('@/assets/img/begin.png'),
          title: '快速使用',
          content: '在社交媒体上<br>直接发起信任关系！'
        }],
        production: [{
          icon: require('@/assets/img/token.png'),
          title: '社交代币',
          content: '基于 $LOOP 发行个人或组织代币，通过社会关系分发与管理',
          btn: {
            title: '开始发行',
            href: '#',
            className: 'primary'
          }
        }, {
          icon: require('@/assets/img/daos.png'),
          title: 'DAOs',
          content: '使用 $LOOP 添加治理与金库合约，发起依靠社会关系生长的 DAO',
          btn: {
            title: '等待解锁',
            href: '#',
            className: 'disabled'
          }
        }],
        blogs: [],
        partners: [{
          icon: require('../assets/img/partners/bsc.png')
        }, {
          icon: require('../assets/img/partners/cfx.png')
        }, {
          icon: require('../assets/img/partners/mttk.png')
        }, {
          icon: require('../assets/img/partners/nash.png')
        }, {
          icon: require('../assets/img/partners/og.png')
        }, {
          icon: require('../assets/img/partners/unisave.png')
        }, {
          icon: require('../assets/img/partners/xqrb.png')
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