<template>
  <div id="app">
    <Hero />
    <ProjectList />
  </div>
</template>

<script>
import Hero from './components/Hero';
import ProjectList from './components/ProjectList';

export default {
  name: 'app',
  components: {
    Hero,
    ProjectList,
  },
};
</script>

<style lang="scss">
@import 'main.scss';

#app {
}
</style>
