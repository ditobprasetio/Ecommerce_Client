import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import router from '../router/index'

Vue.use(Vuex)

// const baseUrl = 'http://localhost:3000'
const baseUrl = 'https://powerful-lake-70062.herokuapp.com'

export default new Vuex.Store({
  state: {
    products: [],
    username: '',
    email: '',
    isLoading: false
  },
  mutations: {
    SET_PRODUCT (state, payload) {
      state.products = payload
    },
    SET_DATA (state, payload) {
      state.username = payload.username
      state.email = payload.email
    },
    SET_LOADING (state, payload) {
      state.isLoading = payload
    }
  },
  actions: {
    getData (context, payload) {
      const data = {
        username: localStorage.name,
        email: localStorage.email
      }
      context.commit('SET_DATA', data)
    },
    signin (context, payload) {
      const email = payload.email
      const password = payload.password
      return axios({
        method: 'POST',
        url: `${baseUrl}/admin/signin`,
        data: {
          email, password
        }
      })
    },
    signout (context) {
      localStorage.clear()
      router.push({ path: '/' })
    },
    fecthProduct (context, payload) {
      context.commit('SET_LOADING', true)
      axios({
        method: 'GET',
        url: `${baseUrl}/product`,
        headers: {
          token: localStorage.getItem('token')
        }
      })
        .then(({ data }) => {
          context.commit('SET_PRODUCT', data)
        })
        .catch(err => {
          console.log(err)
        })
        .finally(_ => {
          context.commit('SET_LOADING', false)
        })
    },
    deleteProduct (context, id) {
      return axios({
        method: 'delete',
        url: `${baseUrl}/product/${id}`,
        headers: {
          token: localStorage.getItem('token')
        }
      })
    },
    addProduct (context, payload) {
      return axios({
        method: 'POST',
        url: `${baseUrl}/product`,
        headers: {
          token: localStorage.getItem('token')
        },
        data: {
          name: payload.name,
          stock: payload.stock,
          price: payload.price,
          category: payload.category,
          image_Url: payload.image_Url
        }
      })
    },
    getProduct (context, id) {
      return axios({
        method: 'GET',
        url: `${baseUrl}/product/${id}`,
        headers: {
          token: localStorage.getItem('token')
        }
      })
    },
    updateProduct (context, payload) {
      return axios({
        method: 'PUT',
        url: `${baseUrl}/product/${payload.id}`,
        headers: {
          token: localStorage.getItem('token')
        },
        data: {
          name: payload.name,
          stock: payload.stock,
          price: payload.price,
          category: payload.category,
          image_Url: payload.image_Url
        }
      })
    }
  },
  modules: {
  }
})
