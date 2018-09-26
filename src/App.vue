<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style lang="scss">
  @import './common/css/index.scss';
  html,body {
    background: $background-color-ff;
    @include wh(100%, 100%);
  }
  #app {
    max-width: 10rem;
    height: 100%;
    margin: 0 auto;
    background: $background-color-f4;
    overflow: hidden;
  }
</style>
