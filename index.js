import { currentStoreView, storeCodeFromRoute } from '@vue-storefront/core/store/lib/multistore'

const EXTENSION_KEY = 'external-checkout'

export default function (app, router, store, config) {
  const cmsUrl = config.externalCheckout.cmsUrl
  const stores = config.externalCheckout.stores
  const currentStore = currentStoreView()

  router.beforeEach((to, from, next) => {
    let storeCode = storeCodeFromRoute(to)
    if (config.storeViews.multistore === true) {
      if (stores.indexOf(storeCode) > -1 && to.name === storeCode + '-checkout') {
        window.location.replace(cmsUrl + '?token=' + store.state.user.token + '&cart=' + store.state.cart.cartServerToken)
      } else {
        next()
      }
    } else {
      if (to.name === 'checkout') {
        window.location.replace(cmsUrl + '?token=' + store.state.user.token + '&cart=' + store.state.cart.cartServerToken)
      } else {
        next()
      }
    }
  })

  return {
    EXTENSION_KEY
  }
}
