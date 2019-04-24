import Vue from 'vue'
import App from './App.vue'
import VueFbCustomerChat from '../dist/vue-fb-customer-chat.umd.js'

Vue.use(VueFbCustomerChat, {
  page_id: 562547237566000,
  theme_color: '#2c3e50',
  locale: 'en_US'
})

Vue.config.productionTip = false

new Vue({
  render: function (h) { return h(App) },
}).$mount('#app')
