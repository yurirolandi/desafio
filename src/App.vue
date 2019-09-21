<template>
  <div id="app">
      <Box />
  </div>
</template>

<script>
import Box from './components/box/Box';
export default {
  name: 'app',
  components: {
    Box
  }
}
</script>

<style lang="scss">
@import './assets/scss/main';
</style>
