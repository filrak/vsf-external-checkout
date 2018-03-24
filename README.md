# Vue Storefront External Checkout

With this extension you can use your CMS checkout (e.g. Magento) instead of default [Vue Storefront](https://github.com/DivanteLtd/vue-storefront) checkout.

This plugin requires cart and user sync with your backend CMS. 

## Current CMS integrations for this extension

* [Magento 2](https://github.com/DivanteLtd/magento2-external-checkout)

If you want to integrate this extension with different CMS just create an issue in [Vue Storefront](https://github.com/DivanteLtd/vue-storefront) repo to get our support.
## How it works?

When user tries to enter your Vue Storefront checkout:
1. The extension synchronizes cart and user data with your backend CMS
2. User is redirected to your CMS checkout.

## Installation

1. Install the extension on your Vue Storefront instance
````
yarn install vsf-external-checkout --save
````
2. Add CMS address to your `config/local.json` file.
````js
"externalCheckout": {
  "cmsUrl" : "https://yourcms.com"
}
````
3. Enable cart synchronization for your Vue Storefront instance in `config/local.json`
````
cart": {
  "synchronize": true,
  ...
}
````
4. Register the extension in `src/extensions/index.js` file
````js
export default [
  // other extensions
  require('vsf-external-checkout/index.js'),
]
