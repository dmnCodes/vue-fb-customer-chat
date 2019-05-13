<h1 align="center">Vue Fb Customer Chat</h1>

<p align="center">
  <a href="https://www.npmjs.com/package/vue-fb-customer-chat">
    <img alt="npm" src="https://img.shields.io/npm/v/vue-fb-customer-chat.svg" />
  </a>
  <a href="https://bundlephobia.com/result?p=vue-fb-customer-chat">
    <img alt="npm" src="https://badgen.net/bundlephobia/minzip/vue-fb-customer-chat" />
  </a>
  <a href="https://npm-stat.com/charts.html?package=vue-fb-customer-chat">
    <img alt="npm" src="https://img.shields.io/npm/dm/vue-fb-customer-chat.svg" />
  </a>
  <a href="http://isitmaintained.com/project/dmnWebDesign/vue-fb-customer-chat">
    <img src="http://isitmaintained.com/badge/resolution/dmnWebDesign/vue-fb-customer-chat.svg" alt="Average time to resolve an issue" />
  </a>
  <a href="http://isitmaintained.com/project/dmnWebDesign/vue-fb-customer-chat">
    <img src="http://isitmaintained.com/badge/open/dmnWebDesign/vue-fb-customer-chat.svg" alt="Percentage of issues still open" />
  </a>
</p>

> Facebook Customer Chat Plugin for Vue.js



## Demo
[https://dmnwebdesign.github.io/vue-fb-customer-chat/](https://dmnwebdesign.github.io/vue-fb-customer-chat/)



## Installation
Install using npm
```sh
$ npm install vue-fb-customer-chat
```

Install using yarn
```sh
$ yarn add vue-fb-customer-chat
```



## Usage
#### For Vue.js projects.


```js
import Vue from 'vue'
import VueFbCustomerChat from 'vue-fb-customer-chat'

Vue.use(VueFbCustomerChat, {
  page_id: null, //  change 'null' to your Facebook Page ID,
  theme_color: '#333333', // theme color in HEX
  locale: 'en_US', // default 'en_US'
})
```



#### For Nuxt.js projects.
Create 'plugins/vue-fb-customer-chat.js'

```js
import Vue from 'vue'
import VueFbCustomerChat from 'vue-fb-customer-chat'

Vue.use(VueFbCustomerChat, {
  page_id: null, //  change 'null' to your Facebook Page ID,
  theme_color: '#333333', // theme color in HEX
  locale: 'en_US', // default 'en_US'
})
```

Add plugin in nuxt.conf.js file for plugins section
```js
plugins: [
  { src: '~/plugins/vue-fb-customer-chat.js', ssr: false }
],
```
