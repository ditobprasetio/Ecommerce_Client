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
    signin (context, payload) {
      const email = payload.email
      const password = payload.password
      return axios({
        method: 'POST',
        url: 'http://localhost:3000/admin/signin',
        data: {
          email, password
        }
      })
    },
    signout (context) {
      localStorage.clear()
      router.push({ path: '/' })
    }
  },
  modules: {
  }
})
