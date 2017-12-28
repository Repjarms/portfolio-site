<template>
  <div class="project">
    <img src="#" />
    <div class="project_details">
      <h3>{{title}}</h3>
      <p>{{description}}</p>
      <div class="project_buttonlist">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Project',
  props: ['title', 'description', 'githubLink', 'appLink', 'image'],
};
</script>

<style scoped lang="scss">
.project {
  color: black;
}
</style>
