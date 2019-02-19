import axios from 'axios'

// initial state
const state = {
  allData: {}
}

// getters
const getters = {
  getDefaultCount: (state) => (id) => {
    return Math.ceil(state.allData.limits[id])
  }
}

// actions
const actions = {
  loadSuggestions ({ commit }) {
    axios.get('http://localhost:8090/')
      .then((response) => {
        commit('setAllData', response.data)
      })
      .catch(function (error) {
        console.log(error)
      })
  }
}

// mutations
const mutations = {
  setAllData (state, data) {
    state.allData = data
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
