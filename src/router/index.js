import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Demo from '@/components/Demo'
import ShopCart from '@/components/ShopCart'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'ShopCart',
      component: ShopCart
    },
    {
      path: '/hello',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/demo',
      name: 'Demo',
      component: Demo
    }
  ]
})
