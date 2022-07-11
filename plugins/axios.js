export default function ({ $axios, redirect }) {
  $axios.onRequest(config => {
    $axios.setToken(this.$store.getters['session/token'], 'Bearer');
  })

  $axios.onError(error => {
    const code = parseInt(error.response && error.response.status)
    if (code === 400) {
      redirect('/400')
    }
    if(error.response.status === 500) {
      redirect('/sorry')
    }
  })
}
