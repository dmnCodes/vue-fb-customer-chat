[![npm](https://img.shields.io/npm/dm/vue-fb-customerchat.svg)](https://npm-stat.com/charts.html?package=vue-fb-customerchat)
[![npm](https://img.shields.io/npm/v/vue-fb-customerchat.svg)](https://www.npmjs.com/package/vue-fb-customerchat)
[![Average time to resolve an issue](http://isitmaintained.com/badge/resolution/dmnWebDesign/vue-fb-customerchat.svg)](http://isitmaintained.com/project/dmnWebDesign/vue-fb-customerchat "Average time to resolve an issue")
[![Percentage of issues still open](http://isitmaintained.com/badge/open/dmnWebDesign/vue-fb-customerchat.svg)](http://isitmaintained.com/project/dmnWebDesign/vue-fb-customerchat "Percentage of issues still open")


# Installation
Install using npm
```sh
$ npm install vue-fb-customerchat
```

Install using yarn
```sh
$ yarn add vue-fb-customerchat
```



# Usage
### For Vue.js projects.


```js
import Vue from 'vue'
import VueFbCustomerchat from 'vue-fb-customerchat'

Vue.use(VueFbCustomerchat, {
  page_id: null, //  change 'null' to your Facebook Page ID,
  theme_color: '#333333', // theme color in HEX
  location: 'en_US', // default 'en_US'
})
```



### For Nuxt.js projects.
Create 'plugins/vue-fb-customerchat.js'

```js
import Vue from 'vue'
import VueFbCustomerchat from 'vue-fb-customerchat'

Vue.use(VueFbCustomerchat, {
  page_id: null, //  change 'null' to your Facebook Page ID,
  theme_color: '#333333', // theme color in HEX
  location: 'en_US', // default 'en_US'
})
```

Add plugin in nuxt.conf.js file for plugins section
```js
plugins: [
  { src: '~/plugins/vue-fb-customerchat.js', ssr: false }
],
```
