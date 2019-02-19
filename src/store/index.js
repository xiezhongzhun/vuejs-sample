import Vue from 'vue'
import Vuex from 'vuex'
import suggestions from './modules/suggestions'
Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
  modules: {
    suggestions
  },
  strict: debug
})
