<template>
  <div id="app">
    <div>
      <shop-cart></shop-cart>
    </div>
  </div>
</template>

<script>
import {mapGetters} from 'vuex'
import ShopCart from '@/components/ShopCart'
export default {
  name: 'App',
  components: {
    ShopCart
  },
  computed: mapGetters([
    'count'
  ])
}
</script>

<style>
</style>
