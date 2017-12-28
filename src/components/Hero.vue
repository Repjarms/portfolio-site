<template>
  <div class="hero">
   <header class="hero_header">
     <ul class="hero_linklist">
      <li>Projects</li> 
      <li>Blogs</li>
      <li>Github</li>
      <li>More</li>
     </ul>
   </header> 
   <div class="hero_text">
     <h1>My Name Is Jeff Arn</h1>
     <h2>I make webapps and embedded systems</h2>
   </div>
   <Console />
  </div>
</template>

<script>
import Console from './ConsoleContainer';

export default {
  name: 'hero',
  components: {
    Console,
  },
};
</script>

<style scoped lang="scss">
@import '../main.scss';

.hero {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  background: $gray-10;
  color: white;
}

.hero_header {
  flex: 0 1 100%;
  background: $gray-20;

  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  align-items: center;
  justify-content: flex-end;
}

.hero_linklist {
  display: flex;
  margin-right: 1em;
  flex-direction: row;
  flex-wrap: nowrap;
  color: $teal;

  li {
    &:hover {
      color: white;
    }
  }
}

.hero_text {
  flex: 0 1 100%;
  text-align: center;
}
</style>
