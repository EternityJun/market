import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Login',
    component: ()=>import('../views/Login.vue')
  },
  {
    path: '/Home',
    name: 'Home',
    component: () => import('../views/Home.vue'),
    children:[
      {
        path:'index',
        component:()=>import('../views/dashbroad/Index.vue')
      },
      {
        path:'productlist',
        component:()=>import('../views/commodity/productlist.vue')
      },
      {
        path:'productadd',
        component:()=>import('../views/commodity/productadd.vue')
      },
    ]
    
  },
]

const router = new VueRouter({
  routes
})

export default router
