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
  @import './components/common/css/index.scss';
  #app {
    background: $background-color;
  }
</style>
