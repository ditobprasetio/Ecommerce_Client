import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import SignIn from '../views/SigninPage.vue'
import Dashboard from '../views/Dashboard.vue'
import ProductList from '../views/ProductList.vue'
import UploadPage from '../views/UploadPage.vue'
import UpdatePage from '../views/UpdatePage.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/signin',
    name: 'SignIn',
    component: SignIn,
    meta: {
      requiresSignout: true
    }
  },
  {
    path: '/product',
    component: Dashboard,
    children: [
      {
        path: '',
        name: 'ProductList',
        component: ProductList
      },
      {
        path: 'add',
        name: 'uploadPage',
        component: UploadPage
      },
      {
        path: 'edit/:id',
        name: 'updatePage',
        component: UpdatePage
      }
    ],
    meta: {
      requiresAuth: true
    }
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    if (localStorage.getItem('token')) {
      next()
    } else {
      next({
        path: '/signin'
      })
    }
  } else if (to.matched.some(record => record.meta.requiresSignout)) {
    if (!localStorage.getItem('token')) {
      next()
    } else {
      next({
        path: '/product'
      })
    }
  } else {
    next()
  }
})

export default router
