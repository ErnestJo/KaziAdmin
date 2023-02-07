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

   'GET_CHANNEL'(state) {
    state.showLoader = true
   },
   'GET_CHANNEL_FAILED'(){
     state.showLoader = false
   },
   'GET_CHANNEL_ERROR' (state) {
     state.showLoader = false
   },
   'GET_CHANNEL_SUCCESS' (state, payload) {
     state.showLoader = false
     state.channel = payload.channel == null ? [] : payload.channel
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
  },

  async _fetchdays ({ commit }) {
    commit('GET_DAYS')
    await this.$axios
      .$get('/api/category')
      .then((response) => {
        commit('GET_DAYS_SUCCESS', response)
      })
      .catch(() => {
        commit('GET_DAYS_ERROR')
      })
  },

  async _fetchlocation ({ commit }) {
    commit('GET_LOCATION')
    await this.$axios
      .$get('/api/category')
      .then((response) => {
        commit('GET_LOCATION_SUCCESS', response)
      })
      .catch(() => {
        commit('GET_LOCATION_ERROR')
      })
  },

  async _fetchjobname ({ commit }) {
    commit('GET_JOBNAME')
    await this.$axios
      .$get('/api/category')
      .then((response) => {
        commit('GET_JOBNAME_SUCCESS', response)
      })
      .catch(() => {
        commit('GET_JOBNAME_ERROR')
      })
  },

  async _fetchphone ({ commit }) {
    commit('GET_PHONE')
    await this.$axios
      .$get('/api/category')
      .then((response) => {
        commit('GET_PHONE_SUCCESS', response)
      })
      .catch(() => {
        commit('GET_PHONE_ERROR')
      })
  },

  async _fetchregion ({ commit }) {
    commit('GET_REGION')
    await this.$axios
      .$get('/api/region')
      .then((response) => {
        commit('GET_REGION_SUCCESS', response)
      })
      .catch(() => {
        commit('GET_REGION_ERROR')
      })
  },

  async _fetchslots ({ commit }) {
    commit('GET_SLOTS')
    await this.$axios
      .$get('/api/slots')
      .then((response) => {
        commit('GET_SLOTS_SUCCESS', response)
      })
      .catch(() => {
        commit('GET_SLOTS_ERROR')
      })
  },

  async _fetchcreated ({ commit }) {
    commit('GET_CREATED')
    await this.$axios
      .$get('/api/created')
      .then((response) => {
        commit('GET_CREATED_SUCCESS', response)
      })
      .catch(() => {
        commit('GET_CREATED_ERROR')
      })
  },

  async _fetchremoved ({ commit }) {
    commit('GET_REMOVED')
    await this.$axios
      .$get('/api/removed')
      .then((response) => {
        commit('GET_REMOVED_SUCCESS', response)
      })
      .catch(() => {
        commit('GET_REMOVED_ERROR')
      })
  },

  async _fetchupdatedAt ({ commit }) {
    commit('GET_UPDATEDAT')
    await this.$axios
      .$get('/api/updatedAt')
      .then((response) => {
        commit('GET_UPDATEDAT_SUCCESS', response)
      })
      .catch(() => {
        commit('GET_UPDATEDAT_ERROR')
      })
  },

  async _fetchuudi ({ commit }) {
    commit('GET_UUDI')
    await this.$axios
      .$get('/api/owner.uuid')
      .then((response) => {
        commit('GET_UUDI_SUCCESS', response)
      })
      .catch(() => {
        commit('GET_UUDI_ERROR')
      })
  },

  async _fetchname ({ commit }) {
    commit('GET_NAME')
    await this.$axios
      .$get('/api/owner.name')
      .then((response) => {
        commit('GET_NAME_SUCCESS', response)
      })
      .catch(() => {
        commit('GET_NAME_ERROR')
      })
  },

  async _fetchchannel ({ commit }) {
    commit('GET_CHANNEL')
    await this.$axios
      .$get('/api/owner.channel.name')
      .then((response) => {
        commit('GET_CHANNEL_SUCCESS', response)
      })
      .catch(() => {
        commit('GET_CHANNEL_ERROR')
      })
    },

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
