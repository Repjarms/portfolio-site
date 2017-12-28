<template>
  <div class="project">
    <img src="#" class="project_image" />
    <div class="project_details">
      <h3>{{title}}</h3>
      <p>{{description}}</p>
      <ul class="project_linklist">
        <li><a href="#">Github</a></li>
        <li><a href="#">View App</a></li>
      </ul>
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

.project_linklist {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;

  li {
    margin: 0.5em;
    border-radius: 8px;
    box-shadow: 1px 1px 10px rgba(0, 0, 0, 0.5);
  }
}
</style>
