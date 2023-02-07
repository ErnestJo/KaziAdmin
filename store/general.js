const state = () => ({
  general: null
})

const mutations = {
  'GET_CATEGORY' (state) {
    state.showLoader = true
  },
  'GET_CATEGORY_FAILED' (state) {
    state.showLoader = false
  },
  'GET_CATEGORY_ERROR' (state) {
    state.showLoader = false
  },
  'GET_CATEGORY_SUCCESS' (state, payload) {
    state.showLoader = false
    state.general = payload.banks == null ? [] : payload.general
  }
}

const actions = {
  async _fetchcategory ({ commit }) {
    commit('GET_CATEGORY')
    await this.$axios
      .$get('/api/category')
      .then((response) => {
        commit('GET_CATEGORY_SUCCESS', response)
      })
      .catch(() => {
        commit('GET_CATEGORY_ERROR')
      })
  }
}

const getters = {
  general: (state) => {
    return state.general
  }
}

export default {
  namespaced: false,
  state,
  mutations,
  actions,
  getters
}
