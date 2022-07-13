const resource = '/api/auth'

export default($axios) => ({
  login(data) {
    return $axios.post(`${resource}/login`, data)
  },
  logout() {
    return $axios.post(`${resource}/logout`)
  },
  resetPassword(token, data) {
    return $axios.post(`${resource}/create-password/token/${token}/type/forgot-password`, data)
  },
  forgotPassword(data) {
    return $axios.post(`${resource}/create-reset`, data)
  },
})
