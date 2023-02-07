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
     state.location = payload.location == null ? [] : payload.location
   },

   'GET_JOBNAME'(state) {
    state.showLoader = true
   },
   'GET_JOBNAME_FAILED'(){
     state.showLoader = false
   },
   'GET_JOBNAME_ERROR' (state) {
     state.showLoader = false
   },
   'GET_JOBNAME_SUCCESS' (state, payload) {
     state.showLoader = false
     state.jobName = payload.jobName == null ? [] : payload.jobName
   },

   'GET_PHONE'(state) {
    state.showLoader = true
   },
   'GET_PHONE_FAILED'(){
     state.showLoader = false
   },
   'GET_PHONE_ERROR' (state) {
     state.showLoader = false
   },
   'GET_PHONE_SUCCESS' (state, payload) {
     state.showLoader = false
     state.phone = payload.phone == null ? [] : payload.phone
   },

   'GET_REGION'(state) {
    state.showLoader = true
   },
   'GET_REGION_FAILED'(){
     state.showLoader = false
   },
   'GET_REGION_ERROR' (state) {
     state.showLoader = false
   },
   'GET_REGION_SUCCESS' (state, payload) {
     state.showLoader = false
     state.region = payload.region == null ? [] : payload.region
   },

   'GET_SLOTS'(state) {
    state.showLoader = true
   },
   'GET_SLOTS_FAILED'(){
     state.showLoader = false
   },
   'GET_SLOTS_ERROR' (state) {
     state.showLoader = false
   },
   'GET_SLOTS_SUCCESS' (state, payload) {
     state.showLoader = false
     state.slots = payload.slots == null ? [] : payload.slots
   },

   'GET_REMOVED'(state) {
    state.showLoader = true
   },
   'GET_REMOVED_FAILED'(){
     state.showLoader = false
   },
   'GET_REMOVED_ERROR' (state) {
     state.showLoader = false
   },
   'GET_REMOVED_SUCCESS' (state, payload) {
     state.showLoader = false
     state.removed = payload.removed == null ? [] : payload.removed
   },

   'GET_CREATED'(state) {
    state.showLoader = true
   },
   'GET_CREATED_FAILED'(){
     state.showLoader = false
   },
   'GET_CREATED_ERROR' (state) {
     state.showLoader = false
   },
   'GET_CREATED_SUCCESS' (state, payload) {
     state.showLoader = false
     state.created = payload.created == null ? [] : payload.created
   },

   'GET_UPDATEDAT'(state) {
    state.showLoader = true
   },
   'GET_UPDATEDAT_FAILED'(){
     state.showLoader = false
   },
   'GET_UPDATEDAT_ERROR' (state) {
     state.showLoader = false
   },
   'GET_UPDATEDAT_SUCCESS' (state, payload) {
     state.showLoader = false
     state.updatedAt = payload.updatedAt == null ? [] : payload.updatedAt
   },

   'GET_UUID'(state) {
    state.showLoader = true
   },
   'GET_UUID_FAILED'(){
     state.showLoader = false
   },
   'GET_UUID_ERROR' (state) {
     state.showLoader = false
   },
   'GET_UUID_SUCCESS' (state, payload) {
     state.showLoader = false
     state.uudi = payload.uudi == null ? [] : payload.uudi
   },

   'GET_NAME'(state) {
    state.showLoader = true
   },
   'GET_NAME_FAILED'(){
     state.showLoader = false
   },
   'GET_NAME_ERROR' (state) {
     state.showLoader = false
   },
   'GET_NAME_SUCCESS' (state, payload) {
     state.showLoader = false
     state.name = payload.name == null ? [] : payload.name
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
