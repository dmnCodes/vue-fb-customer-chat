[![npm](https://img.shields.io/npm/dm/vue-fb-customer-chat.svg)](https://npm-stat.com/charts.html?package=vue-fb-customer-chat)
[![npm](https://badgen.net/bundlephobia/minzip/vue-fb-customer-chat)](https://bundlephobia.com/result?p=vue-fb-customer-chat)
[![npm](https://img.shields.io/npm/v/vue-fb-customer-chat.svg)](https://www.npmjs.com/package/vue-fb-customer-chat)
[![Average time to resolve an issue](http://isitmaintained.com/badge/resolution/dmnWebDesign/vue-fb-customer-chat.svg)](http://isitmaintained.com/project/dmnWebDesign/vue-fb-customer-chat "Average time to resolve an issue")
[![Percentage of issues still open](http://isitmaintained.com/badge/open/dmnWebDesign/vue-fb-customer-chat.svg)](http://isitmaintained.com/project/dmnWebDesign/vue-fb-customer-chat "Percentage of issues still open")


# Installation
Install using npm
```sh
$ npm install vue-fb-customer-chat
```

Install using yarn
```sh
$ yarn add vue-fb-customer-chat
```



# Usage
### For Vue.js projects.


```js
import Vue from 'vue'
import VueFbCustomerChat from 'vue-fb-customer-chat'

Vue.use(VueFbCustomerChat, {
  page_id: null, //  change 'null' to your Facebook Page ID,
  theme_color: '#333333', // theme color in HEX
  location: 'en_US', // default 'en_US'
})
```



### For Nuxt.js projects.
Create 'plugins/vue-fb-customer-chat.js'

```js
import Vue from 'vue'
import VueFbCustomerChat from 'vue-fb-customer-chat'

Vue.use(VueFbCustomerChat, {
  page_id: null, //  change 'null' to your Facebook Page ID,
  theme_color: '#333333', // theme color in HEX
  location: 'en_US', // default 'en_US'
})
```

Add plugin in nuxt.conf.js file for plugins section
```js
plugins: [
  { src: '~/plugins/vue-fb-customer-chat.js', ssr: false }
],
```
