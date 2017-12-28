<template>
  <div class="console">
    <p>option list placeholder</p>
    <div class="console_window">
      <ConsolePane />
      <ConsolePane />
    </div>
  </div>
</template>

<script>
import ConsolePane from './ConsolePane';

export default {
  name: 'console',
  components: {
    ConsolePane,
  },
};
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
