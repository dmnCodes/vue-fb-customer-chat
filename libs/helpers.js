import log from './helpers-log'
const defaultLocale = 'en_us'

export function fetchFbSdk(options) {
  const locale = options.locale ? options.locale : defaultLocale
  return new Promise((resolve, reject) => {
    ;(function(d, s, id) {
      const fjs = d.getElementsByTagName(s)[0]
      if (d.getElementById(id)) {
        return
      }
      const js = d.createElement(s)
      js.id = id
      js.src = 'https://connect.facebook.net/' + locale + '/sdk/xfbml.customerchat.js'
      fjs.parentNode.insertBefore(js, fjs)
      js.onload = function() {
        console.log('%cVueFbCustomerchat:: loaded', log.info)
        resolve()
      }
      js.onerror = function() {
        reject()
        console.error('%cVueFbCustomerchat:: NOT loaded', log.error)
      }
    })(document, 'script', 'facebook-jssdk')
  })
}

export function initFbSdk(options) {
  return new Promise(resolve => {
    window.fbAsyncInit = function() {
      const defaults = { cookie: true, xfbml: true, version: 'v3.0' }
      options = { ...defaults, ...options }
      window.FB.init(options)
      resolve()
    }
  })
}

export function getFbSdk(options) {
  return new Promise(resolve => {
    if (window.FB) {
      resolve(window.FB)
    } else {
      fetchFbSdk(options).then(() => {
        initFbSdk(options).then(() => {
          resolve(window.FB)
        })
      })
    }
  })
}
