export default {
  namespaced: true,
  state: {
    text: '',
    color: '',
    show: false,
  },
  actions: {
    showSnackbar({ commit }, data) {
      return new Promise(
        resolve => {
          commit('handleSnackbar', data)
          resolve()
        },
        reject => {
          reject()
        },
      )
    },
    closeSnackbar({ commit }) {
      return new Promise(
        resolve => {
          commit('handleCloseSnackbar')
          resolve()
        },
        reject => {
          reject()
        },
      )
    },
  },
  mutations: {
    handleSnackbar(state, data) {
      state.text = data.text
      state.color = data.color
      state.show = true
    },
    handleCloseSnackbar(state) {
      state.show = false
    },
  },
  getters: {
    text: state => state.text,
    color: state => state.color,
    show: state => state.show,
  },
}
