import log from './helpers-log'
import { getFbSdk, mountFbCustomerChat } from './helpers'

const VueFbCustomerChat = {
  install: (Vue, options) => {
    getFbSdk(options).then(() => {
      if (options.page_id) {
        mountFbCustomerChat(options)
      } else {
        console.error(
          '%cVueFbCustomerChat:: You have to specify `page_id`',
          log.error
        )
      }
    })

    Vue.mixin({
      mounted() {
        if (!this.$parent) {
          console.log('Hello from created hook!')
        }
      }
    })
  }
}

// register plugin if it is used via cdn or directly as a script tag
if (typeof window !== 'undefined' && window.Vue) {
  window.VueFbCustomerChat = VueFbCustomerChat
}

export default VueFbCustomerChat
