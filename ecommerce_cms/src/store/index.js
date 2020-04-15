import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import router from '../router/index'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    product: []
  },
  mutations: {
    SET_PRODUCT (state, payload) {
      state.product = payload
    }
  },
  actions: {
    logout (context) {
      localStorage.clear()
      router.push({ path: '/' })
    }
  },
  modules: {
  }
})
