const resource = '/api/auth'
const resource2 = '/api/v1/check-username'

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
  googleLogin(token) {
    return $axios.get(`${resource}/login/google?access_token=${token}`)
  },
  oauthCallback(data) {
    return $axios.post(`${resource}/auth/google/callback`, data)
  },
  checkUsername(data) {
    return $axios.get(`${resource2}?username=${data}`)
  },
})
