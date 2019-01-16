<template>
  <div class="hello">
    组件1count is {{count}}
    <button @click="increment">+5</button>
    <button @click="decrement">-3</button>
  </div>
</template>

<script>
import {mapGetters, mapActions} from 'vuex'
export default {
  computed: mapGetters([
    'count'
  ]),
  methods: mapActions([
    'increment',
    'decrement'
  ])
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lagn='stylus'>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
