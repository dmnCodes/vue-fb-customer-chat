<template>
  <div id="app">
    <div class="branding-wrapper">
      <Logo />
      <!-- <h1>vue-fb-customer-chat</h1> -->
      <h3>Facebook Customer Chat Plugin for Vue.js</h3>
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
        <a href="https://isitmaintained.com/project/dmnWebDesign/vue-fb-customer-chat">
          <img src="https://isitmaintained.com/badge/resolution/dmnWebDesign/vue-fb-customer-chat.svg" alt="Average time to resolve an issue" />
        </a>
        <a href="https://isitmaintained.com/project/dmnWebDesign/vue-fb-customer-chat">
          <img src="https://isitmaintained.com/badge/open/dmnWebDesign/vue-fb-customer-chat.svg" alt="Percentage of issues still open" />
        </a>
      </p>
    </div>
    <div class="github">
      <a target="_blank" :href="repository" @click.native="clickGitHub">
        <img src="./assets/GitHub-Mark-64px.png" />
      </a>
    </div>
  </div>
</template>

<script>
const { repository } = require('../package.json')
import Logo from '@/components/Logo'
export default {
  name: 'app',

  components: {
    Logo
  },

  computed: {
    repository() {
      return repository.url.replace('git+', '')
    }
  },

  mounted() {
    this.$fbCustomerChat.setOptions({
      theme_color: '#41B883'
    })

    this.$ga.page({
      page: '/',
      title: 'Home page',
      location: window.location.href
    })
  },

  methods: {
    clickGitHub() {
      this.$ga.event({
        eventCategory: 'links',
        eventAction: 'click',
        eventLabel: 'GitHub'
      })
    }
  }
}
</script>

<style lang="scss">
*, *::before, *::after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

html {
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  font-family: 'Dosis', Helvetica, Arial, sans-serif;
  font-size: 13px;
  text-align: center;
  color: #2c3e50;

  @media (min-width: 600px) {
    font-size: 15px;
  }

  @media (min-width: 1200px) {
    font-size: 16px;
  }
}

#app {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
}

h1 {
  font-weight: 600;
}

h3 {
  font-weight: 300;
  font-size: 1.3rem;
}

p {
  margin-top: 2em;
}

.github {
  position: fixed;
  top: 18pt;
  right: 18pt;
  width: 45pt;
  height: 45pt;
  display: flex;
  justify-content: center;
  align-items: center;

  &::before {
    content: '';
    border-radius: 50%;
    box-shadow: 0px 8px 16px rgba(0,0,0, 0.1);
    width: 100%;
    height: 100%;
    position: absolute;
    opacity: 0;
    transition: opacity 0.3s;
  }

  &:hover::before {
    opacity: 1;
  }

  img {
    display: block;
    width: 100%;
    opacity: 0.25;
    border-radius: 50%;
    overflow: hidden;
  }
}
</style>
