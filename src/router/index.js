import {wrap} from 'svelte-spa-router/wrap'

export default {
  '/': wrap({
    asyncComponent: () => import('@/views/List.svelte')
  }),
  '/book/*':  wrap({
    asyncComponent: () => import('@/views/Book.svelte')
  })
}