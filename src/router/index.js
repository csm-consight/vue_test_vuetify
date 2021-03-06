import Vue from 'vue'
import VueRouter from 'vue-router'
import UserList from '../components/UserList.vue';
import PartnerList from '../components/PartnerList.vue';
import ItemManage from '../components/Item_Manage.vue';

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'userserch',
    component: UserList
  },
  {
    path: '/partner',
    name: 'PartnerList',
    component: PartnerList
  },
  {
    path: '/itemmanage',
    name: 'ItemManage',
    component: ItemManage
  },

  // {
  //   path: '/about',
  //   name: 'About',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
