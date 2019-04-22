import log from './helpers-log'
import { getFbSdk, mountFbCustomerChat } from './helpers'

const VueFbCustomerChat = {
  install: (Vue, options) => {
    Vue.mixin({
      mounted() {
        console.log('Hello from created hook!')
      }
    })

    getFbSdk(options).then(() => {
      if (options.page_id) {
        mountFbCustomerChat(options)
      } else {
        console.error(
          '%cVueFbCustomerChat:: You have to specify `pageId`',
          log.error
        )
      }
    })
  }
}

export default VueFbCustomerChat
