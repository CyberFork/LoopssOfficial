import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    clientWidth: document.documentElement.clientWidth,
    clientHeight: document.documentElement.clientHeight,
    isMobile: false
  },
  mutations: {
    SET_SCREEN(state, screenObj) {
      state.clientWidth = screenObj.width
      state.clientHeight = screenObj.height,
      state.isMobile = screenObj.width < 1366
      if(state.isMobile && document.body){
        document.body && (document.body.className = 'mobile')
      }else{
        document.body && (document.body.className = 'pc')
      }
    },
  },
  actions: {
    SetScreen({
      commit
    }, screenObj) {
      commit('SET_SCREEN', screenObj)
    },
  },
  modules: {
  }
})
