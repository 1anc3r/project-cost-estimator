<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script setup lang="ts">
// 根组件，仅作为路由出口
</script>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html,
body {
  height: 100%;
  background: #f0f2f5;
  font-family: 'Segoe UI', 'PingFang SC', Roboto, 'Helvetica Neue', sans-serif;
}

#app {
  min-height: 100%;
  padding: 20px;
}

@media (max-width: 768px) {
  #app {
    padding: 8px;
  }
}
</style>