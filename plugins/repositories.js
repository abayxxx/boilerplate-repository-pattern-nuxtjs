import ServerRepository from '~/repositories/Repositories'

export default (ctx, inject) => {
  inject('repositories', ServerRepository(ctx.$axios))
}
