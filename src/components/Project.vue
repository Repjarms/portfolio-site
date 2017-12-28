<template>
  <div class="project">
    <img src="#" class="project_image" />
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
@import '../colors';

.project {
  padding: 10%;
  color: black;

  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  align-items: center;
  justify-content: flex-start;

  &:nth-child(2) {
    background: $teal;
  }

  &:nth-child(4) {
    background: $gray-20;
    color: white;
  }

  &:nth-child(2n) {
    img {
      order: 1;
    }

    div {
      order: 0;
    }
  }
}

.project_image {
  flex: 0 1 50%;
}

.project_details {
  flex: 0 1 50%;
}
</style>
