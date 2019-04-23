<template>
  <div id="app">
    <div class="branding-wrapper">
      <img alt="Vue logo" src="./assets/logo.png">
      <h1>vue-fb-customer-chat</h1>
      <h3>Facebook Customer Chat Plugin for Vue.js</h3>
    </div>
    <div class="github">
      <a target="_blank" :href="repository">
        <img src="./assets/GitHub-Mark-64px.png" />
      </a>
    </div>
  </div>
</template>

<script>
const { repository } = require('../package.json')
export default {
  name: 'app',

  computed: {
    repository() {
      return repository.url.replace('git+', '')
    }
  },
}
</script>

<style lang="scss">
*, *::before, *::after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body {
  font-family: 'Dosis', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;

  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
}

h3 {
  font-weight: 300;
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
