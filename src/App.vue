<template>
  <div id="app">
    <button @click="screenName = 'ArchivedScreen'" 
            :disabled="screenName == 'ArchivedScreen'">
      Archived View
    </button>
    <button @click="screenName = 'InboxScreen'"
            :disabled="screenName == 'InboxScreen'">
      Inbox View
    </button>

    <suspense>
      <template #default>
        <component :is="screenName" />
      </template>
      <template #fallback>
        <p>Loading...</p>
      </template>
    </suspense>
  </div>
</template>

<script>
import InboxScreen from './components/InboxScreen.vue';
import ArchivedScreen from '@/components/ArchivedScreen.vue';

export default {
  name: 'App',
  components: {
    InboxScreen,
    ArchivedScreen
  },
  setup(){
    let screenName = 'InboxScreen';
    return {screenName}
  }
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
