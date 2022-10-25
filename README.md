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
  <a href="http://isitmaintained.com/project/dmnCodes/vue-fb-customer-chat">
    <img src="http://isitmaintained.com/badge/resolution/dmnCodes/vue-fb-customer-chat.svg" alt="Average time to resolve an issue" />
  </a>
  <a href="http://isitmaintained.com/project/dmnCodes/vue-fb-customer-chat">
    <img src="http://isitmaintained.com/badge/open/dmnCodes/vue-fb-customer-chat.svg" alt="Percentage of issues still open" />
  </a>
</p>

> Facebook Customer Chat Plugin for Vue.js



## Demo
[https://dmnCodes.github.io/vue-fb-customer-chat/](https://dmnCodes.github.io/vue-fb-customer-chat/)



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
#### Setting up the Messenger
For the messenger to work, you need to enable it on Facebook first:

1. Go to your Page on Facebook
2. Go to `About` and copy the Page ID (https://www.facebook.com/help/1503421039731588)
2. Go to `Settings` > `Messaging`
3. Complete the setup in the `Add Messenger to your website`, do not forget to add both production and local URLs

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

Add plugin in nuxt.config.js file for plugins section
```js
plugins: [
  { src: '~/plugins/vue-fb-customer-chat.js', ssr: false }
],
```
