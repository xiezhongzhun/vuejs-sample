import axios from 'axios'

// initial state
const state = {
  allData: {},
  selectItems: []
}

// getters
const getters = {
  getDefaultCount: (state) => (id) => {
    return Math.ceil(state.allData.limits[id])
  },
  getSelectClass: (state) => (id) => {
    return Math.ceil(state.allData.limits[id])
  },
  getSeelctItemsByClass: (state) => (id) => {
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
  },
  addNewSelect (state, data) {
    state.selectItems.push(data)
  },
  removeSelect (state, data) {
    state.selectItems.forEach((element, index) => {
      if (element.id === data.id) {
        state.selectItems.splice(index, 1)
      }
    })
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
