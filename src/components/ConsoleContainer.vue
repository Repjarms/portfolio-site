<template>
  <div class="console">
    <p>option list placeholder</p>
    <div class="console_window">
      <p>Console pane placeholder</p> 
      <p>Console pane placeholder</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'console',
} 
</script>

<style scoped lang="scss">
@import '../main.scss';

.console {
  flex: 0 1 80%;
  margin: 5% 0;
}

.console_window {
  background: rgba(0, 0, 0, 0.3);
  border-radius: 10px;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
}
</style>
