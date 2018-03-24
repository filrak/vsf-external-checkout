const EXTENSION_KEY = 'external-checkout'

export default function (app, router, store, config) {
  const externalCheckoutUrl = config.externalCheckout.url

  router.beforeEach((to, from, next) => {
    if (to.name === 'checkout') {
      window.location.replace(externalCheckoutUrl + '?userId=' + store.state.user.token + '&cartId=' + store.state.cart.cartServerToken)
      next()
    }
  })

  return {
    EXTENSION_KEY
  }
}
