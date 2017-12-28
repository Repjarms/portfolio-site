<template>
  <div class="project-list"> 
    <Project
      v-for="project in projects"
      v-bind:key="project.id"
      v-bind:title="project.title"
      v-bind:description="project.description"
      v-bind:githubLink="project.githubLink"
      v-bind:appLink="project.appLink"
      v-bind:image="project.image"
    ></Project>
  </div>
</template>

<script>
import Project from './Project';

export default {
  name: 'ProjectList',
  components: {
    Project,
  },
  data: function () {
    return {
      projects: [],
    }
  },
  mounted() {
    fetch('/data')
      .then(res => (
        res.json()     
      ))
      .then(json => {
        this.projects = json
      })
      .catch(err => {
        throw err
      });
  }
};
</script>

<style scoped lang="scss">

</style>
