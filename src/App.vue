<template>
  <div id="app">
    <suspense>
      <template #default>
        <InboxScreen />
      </template>
      <template #fallback>
        Loading...
      </template>
    </suspense>
  </div>
</template>

<script>
import InboxScreen from './components/InboxScreen.vue';

export default {
  name: 'App',
  components: {
    InboxScreen,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
