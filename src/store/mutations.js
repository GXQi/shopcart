const mutations = {
  getList (state, list) {
    state.list = list
    console.log(list)
  },
  getTotalPrice (state, totalPrice) {
    state.totalPrice = totalPrice
    console.log(totalPrice)
  },
  getTotalNum (state, totalNum) {
    state.totalNum = totalNum
    console.log(totalNum)
  }
}

export default mutations
