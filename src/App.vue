<template>
  <div id="app">
    <button @click="screenName = 'MailScreenArchived'" 
            :disabled="screenName == 'MailScreenArchived'">
      Archived View
    </button>
    <button @click="screenName = 'MailScreenInbox'"
            :disabled="screenName == 'MailScreenInbox'">
      Inbox View
    </button>

    <suspense>
      <template #default>
        <MailScreen :screenName="screenName" />
      </template>
      <template #fallback>
        <p>Loading...</p>
      </template>
    </suspense>
  </div>
</template>

<script>
import MailScreen from '@/components/MailScreen.vue';

export default {
  name: 'App',
  components: {
    MailScreen
  },
  setup(){  
    let screenName = 'MailScreenInbox';
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
