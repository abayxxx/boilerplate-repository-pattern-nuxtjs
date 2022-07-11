export default {
  namespaced: true,
  state: {
    user: {},
    userAbility: {},
  },
  actions: {
    saveSession({ commit }, data) {
      return new Promise(
        resolve => {
          commit('storeSession', data)
          resolve()
        },
        reject => {
          reject()
        },
      )
    },
  },
  mutations: {
    storeSession(state, data) {
      localStorage.setItem('user', JSON.stringify(data))
      localStorage.setItem('userAbility', JSON.stringify(data.user.ability))
      state.user = JSON.parse(localStorage.getItem('user'))
      state.userAbility = JSON.parse(localStorage.getItem('userAbility')) ?? []
    },
  },
  getters: {
    user: state => state.user || JSON.parse(localStorage.getItem('user')),
    userAbility: state => state.userAbility || JSON.parse(localStorage.getItem('userAbility')),
    token: state => {
      if (state.user.token === undefined || state.user.token === null) {
        const user = JSON.parse(localStorage.getItem('user'))

        return user ? user.token : '-'
      }

      return state.user.token
    },
  },
}
