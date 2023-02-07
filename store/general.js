const state = () => ({
  category: null,
  days: null,
  location:  null,
  jobName: null,
  phone: null,
  region: null,
  slots: null,
  removed: null,
  updatedAt: null,
  uudi: null,
  channel: null,
  name: null,
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
    state.category = payload.category == null ? [] : payload.category
  },

  'GET_DAYS'(state) {
   state.showLoader = true
  },
  'GET_DAYS_FAILED'(){
    state.showLoader = false
  },
  'GET_DAYS_ERROR' (state) {
    state.showLoader = false
  },
  'GET_DAYS_SUCCESS' (state, payload) {
    state.showLoader = false
    state.days = payload.days == null ? [] : payload.days
  },

  'GET_LOCATION'(state) {
    state.showLoader = true
   },
   'GET_LOCATION_FAILED'(){
     state.showLoader = false
   },
   'GET_LOCATION_ERROR' (state) {
     state.showLoader = false
   },
   'GET_LOCATION_SUCCESS' (state, payload) {
     state.showLoader = false
     state.days = payload.days == null ? [] : payload.days
   },

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
  category: (state) => {
    return state.category
  }
}

export default {
  namespaced: false,
  state,
  mutations,
  actions,
  getters
}
