
const user = JSON.parse(localStorage.getItem('user'))
const initialState = user ? { status: { loggedIn: true }, user } : { status: { loggedIn: false }, user: null }
const userData = localStorage.getItem('userData')
const accountData = userData !== 'undefined' ? JSON.parse(userData) : '-'

export default {
  namespaced: true,
  state: {
    initialState,
    accountData,
  },
  actions: {
    login({ dispatch, commit }, user) {
      return this.$repositories.auth.login(user).then(
        user => {
          dispatch('session/saveSession', user.data, { root: true })

          return Promise.resolve(user)
        },
        error => {
          commit('loginFailure')

          return Promise.reject(error)
        },
      )
    },
  },
  mutations: {
    userData(state, data) {
      state.accountData = data
    },
    loginSuccess(state, user) {
      state.initialState.status.loggedIn = true
      state.initialState.user = user
    },
    loginFailure(state) {
      state.initialState.status.loggedIn = false
      state.initialState.user = null
    },
    logout(state) {
      state.initialState.status.loggedIn = false
      state.initialState.user = null
    },
    registerSuccess(state) {
      state.initialState.status.loggedIn = false
    },
    registerFailure(state) {
      state.initialState.status.loggedIn = false
    },
  },
  getters: {
    accountData: state => state.accountData,
  },
}
