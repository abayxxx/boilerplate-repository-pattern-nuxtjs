import AuthRepository from '~/repositories/AuthRepositories'


export default ($axios) => ({
  auth: AuthRepository($axios),
})
