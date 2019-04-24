<template lang="html">
  <div class="logo">
    <h1 class="brand">
      <div class="vue">vue</div>
      <div class="fb">Fb</div>
    </h1>
    <h2 class="package">
      <div>Customer</div>
      <div>Chat</div>
    </h2>
  </div>
</template>

<script>
export default {
}
</script>

<style lang="scss" scoped>
.logo {
  width: 100%;
  height: 100%;
  padding: 0 0 0.5em 0;
  font-size: 20vw;

  .brand {
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1em;

    .vue {
      color: #41B883;
      font-weight: 400;
    }
    .fb {
      color: #35495E;
      font-weight: 800;
      font-size: .5em;
      margin-top: -0.15em;
    }
  }

  .package {
    display: flex;
    justify-content: center;
    font-weight: 400;
    font-size: .35em;
    line-height: 1;
    opacity: 0.75;
  }
}

@media screen and (min-width: 600px) {
  .logo {
    font-size: 8rem;
  }
}
</style>
