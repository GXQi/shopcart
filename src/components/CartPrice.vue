<template>
  <div class="shoppingcart">
    <div class="content">
      <div class="content-left">
        <div class="logo-wrapper">
          <div class="logo" :class="{'highlight':totalCount>0}">
            <i class="iconfont" :class="{'highlight':totalCount>0}">&#xe609;</i>
          </div>
          <div class="num" v-show="totalCount>0">{{ totalCount }}</div>
        </div>
        <div class="price border-right" :class="{'highlight':totalPrice>0}">￥{{ totalPrice }}</div>
        <div class="desc">另需配送费￥{{ deliveryPrice }}元</div>
      </div>
      <div class="content-right">
        <div class="pay" :class="payClass">{{ payDesc }}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Shoppingcart',
  data () {
    return {
    }
  },
  props: {
    deliveryPrice: {
      type: Number,
      default: 0
    },
    minPrice: {
      type: Number,
      default: 0
    },
    selectFoods: {
      type: Array,
      default () {
        return [{
          price: 5,
          count: 5
        }]
      }
    }
  },
  computed: {
    totalPrice () {
      let total = 0
      this.selectFoods.forEach((food) => {
        total += food.price * food.count
      })
      return total
    },
    totalCount () {
      let count = 0
      this.selectFoods.forEach((food) => {
        count += food.count
      })
      return count
    },
    payDesc () {
      if (this.totalPrice === 0) {
        return `￥${this.minPrice}元起送`
      } else if (this.minPrice > this.totalPrice) {
        let diff = this.minPrice - this.totalPrice
        return `还差￥${diff}元`
      } else {
        return '去结算'
      }
    },
    payClass () {
      if (this.minPrice > this.totalPrice) {
        return 'not-enough'
      } else {
        return 'enough'
      }
    }
  }
}
</script>

<style scoped lang="stylus">
  .border-right
    &:before
      border-color: rgba(255, 255, 255, .1)
  .shoppingcart
    position: fixed
    left: 0
    bottom: 0
    z-index: 50
    width: 100%
    height: .96rem
    background: #CCC
    .content
      display: flex
      background: #141d27
      .content-left
        flex: 1
        font-size: 0
        .logo-wrapper
          position: relative
          display: inline-block
          top: -.2rem
          margin: 0 .24rem
          padding: .12rem
          box-sizing: border-box
          width: 1.12rem
          height: 1.12rem
          vertical-align: top
          border-radius: 50%
          background: #141d27
          .logo
            width: 100%
            height: 100%
            border-radius: 50%
            background: rgba(255, 255, 255, .1)
            text-align: center
            &.highlight
              background: rgb(0, 160, 220)
            .icon-shopping_cart
              font-size: .48rem
              line-height: .88rem
              color: rgba(255, 255, 255, .4)
              &.highlight
                color: rgb(255, 255, 255)
          .num
            position: absolute
            top: 0
            right: 0
            width: .48rem
            height: .32rem
            line-height: .32rem
            border-radius: .16rem
            font-size: .18rem
            font-weight: 700
            color: rgb(255, 255, 255)
            text-align: center
            background-color: rgb(240, 20, 20)
            box-shadow: 0 .04rem .08rem 0 rgba(0, 0, 0, .4)
        .price
          display: inline-block
          margin-top: .24rem
          padding-right: .24rem
          vertical-align: top
          line-height: .48rem
          font-size: .32rem
          font-weight: 700
          color: rgba(255, 255, 255, .4)
          box-sizing: border-box
          &.highlight
            color: rgb(255, 255, 255)
        .desc
          display: inline-block
          vertical-align: top
          padding-left: .24rem
          margin-top: .24rem
          font-size: .20rem
          line-height: .48rem
          color: rgba(255, 255, 255, .4)
          font-weight: 100
      .content-right
        flex: 0 0 2.1rem
        width: 2.1rem
        text-align: center
        .pay
          height: .96rem
          padding-top: .24rem
          font-size: .24rem
          line-height: .48rem
          font-weight: 700
          color: rgba(255, 255, 255, .4)
          &.not-enough
            background: rgba(255, 255, 255, .1)
          &.enough
            background: rgb(0, 180, 60)
            color: rgb(255, 255, 255)
</style>
