<template>
  <div id="app">
    <Hero />
  </div>
</template>

<script>
import Hero from './components/Hero';

export default {
  name: 'app',
  components: {
    Hero,
  },
};
</script>

<style lang="scss">
@import 'main.scss';

#app {
}
</style>
