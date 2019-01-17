<template>
  <div class="shopcart">
    <div class="items">
      <div
        class="item"
        v-for="item of infoList"
        :key="item.id"
      >
        <div class="item-img">
          <img :src="item.imgUrl" />
        </div>
        <div class="item-info">
          <div class="item-name">
            <p class="name">{{ item.name }}</p>
          </div>
          <div class="item-hint">
            <p class="hint">{{ item.hint }}</p>
          </div>
          <div class="item-price">
            <p class="price">￥<span>{{ item.price }}</span></p>
          </div>
          <div class="item-num">
            <span class="iconfont" @click="add(item.num)">&#xe612;</span>
            <span class="num">{{ item.num }}</span>
            <span class="iconfont" @click="decrease">&#xe628;</span>
          </div>
        </div>
      </div>
    </div>
    <cart-price></cart-price>
  </div>
</template>

<script>
import axios from 'axios'
import CartPrice from './CartPrice'
import { mapState, mapMutations } from 'vuex'
export default {
  name: 'ShopCart',
  components: {
    CartPrice
  },
  data () {
    return {
      infoList: [],
      totalPrice: 0.00,
      totalNum: 0
    }
  },
  methods: {
    getInfo () {
      axios.get('static/mock/index.json').then(this.getInfoSucc)
    },
    getInfoSucc (res) {
      res = res.data
      console.log(res)
      if (res.ret && res.data) {
        const data = res.data
        this.infoList = data.infoList
        this.totalPrice = data.totalPrice
        this.totalNum = data.totalNum
      }
    },
    add (num) {
      num++
      console.log(num)
    },
    decrease (num) {
      num--
      console.log(num)
    }
  },
  mounted () {
    this.getInfo()
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="stylus">
.shopcart
  .items
    width: 100%
    overflow: hidden
    .item
      position: relative
      width: 100%
      display: flex
      padding: .25rem 0 .25rem .25rem
      margin-bottom: .25rem
      background: linear-gradient(90deg, #faf0cd, #fab397)
      .item-img
        width: 1.8rem
        overflow: hidden
        img
          display: block
          width: 100%
      .item-info
        flex: 1
        padding-left: .3rem
        .item-name
          padding-bottom: .2rem
          .name
            color: #07111b
            font-size: .3rem
            font-weight: 700
            line-height: .5rem
        .item-hint
          padding-bottom: .2rem
          .hint
            color: #93999f
            line-height: .4rem
        .item-price
          .price
            color: #f01414
            line-height: .4rem
            span
              font-size: .3rem
              font-weight: 600
        .item-num
          position: absolute
          bottom: .25rem
          right: .5rem
          .iconfont
            font-size: .4rem
            color: #FFF
            display: inline-block
            padding: 0 .15rem
          .num
            color: #93999f
            display: inline-block
            vertical-align: top
            text-align: center
            padding-top: .07rem
</style>
