import log from './helpers-log'
import { getFbSdk } from './helpers'

const VueFbCustomerchat = {
  install: (Vue, options) => {
    Vue.mixin({
      mounted() {
        console.log('Hello from created hook!')
      }
    })

    getFbSdk(options).then(() => {
      if (options.page_id) {
        // // events to emit
        // FB.Event.subscribe('customerchat.load', () => console.log('customerchat.load'));
        // FB.Event.subscribe('customerchat.show', () => console.log('customerchat.show'));
        // FB.Event.subscribe('customerchat.hide', () => console.log('customerchat.hide'));
        // FB.Event.subscribe('customerchat.dialogShow', () => console.log('customerchat.dialogShow'));
        // FB.Event.subscribe('customerchat.dialogHide', () => console.log('customerchat.dialogHide'));
        // // triggers
        // FB.CustomerChat.show(shouldShowDialog: boolean);
        // FB.CustomerChat.hide();
        // FB.CustomerChat.hideDialog();
        // FB.CustomerChat.showDialog();

        const elem = document.createElement('div')
        elem.setAttribute('class', 'fb-customerchat')
        elem.setAttribute('attribution', 'setup_tool')

        // set attributes
        Object.entries(options).forEach(attr => {
          elem.setAttribute(attr[0], attr[1])
        })

        document.body.appendChild(elem)
      } else {
        console.error(
          '%cVueFbCustomerchat:: You have to specify `pageId`',
          log.error
        )
      }
    })
  }
}

export default VueFbCustomerchat
