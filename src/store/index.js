import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    signUp: {
      user: '',
      email: '',
      password: ''
    }
  },
  mutations: {
    SAVE_USER (state, payload) {
      state.signUp = Object.assign(state.signUp, payload)
    }
  },
  actions: {
  },
  modules: {
  }
})
