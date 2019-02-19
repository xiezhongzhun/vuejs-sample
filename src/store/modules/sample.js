// initial state
const state = {
    allTypes: []

}

// getters
const getters = {
    getTypeByPaId: (state) => (id) =>
    {
        return state.allTypes.filter(type => type.paTypeId === id)
    }
}

// actions
const actions = {
    loadTypes ({ commit }) {
        if (state.allTypes.length == 0){
            axios.get('/admin/type')
                .then((response) => {
                    commit('setAllTypes', response.data)
                })
                .catch(function (error) {
                    console.log(error);
                });
        }
    }
}

// mutations
const mutations = {
    setAllTypes (state, types) {
        state.allTypes = types
    }
}

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}