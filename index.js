const EXTENSION_KEY = 'external-checkout'

export default function (app, router, store, config) {
  const cmsUrl = config.externalCheckout.cmsUrl

  router.beforeEach((to, from, next) => {
    if (to.name === 'checkout') {
      window.location.replace(cmsUrl + '/vue/cart/sync/token/' + store.state.user.token + '/cart/' + store.state.cart.cartServerToken)
    } else {
      next()   
    } 
  })

  return {
    EXTENSION_KEY
  }
}
