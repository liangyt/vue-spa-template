import Vue from 'vue'
import Router from 'vue-router'
import One from '@/components/index/one'
import Two from '@/components/index/two'
import Three from '@/components/index/three'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/one',
      name: 'one',
      component: One
    },
    {
      path: '/two',
      name: 'two',
      component: Two
    },
    {
      path: '/three',
      name: 'three',
      component: Three
    }
  ]
})
