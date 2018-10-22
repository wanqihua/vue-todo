import Vue from 'vue'
import Router from 'vue-router'
import index from '@/components/index'
// import activity from '@/components/activity'
import countDown from '@/components/countDown'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/index',
      name: 'index',
      component: index
    },
    {
      path: '/countDown',
      name: 'countDown',
      component: countDown
    }

  ]
})
