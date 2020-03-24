<template>
  <div id="app">
    <button @click="selectScreen('MailScreenInbox');"
            :disabled="screenName == 'MailScreenInbox'">
      Inbox View
    </button>
    <button @click="selectScreen('MailScreenArchived')" 
            :disabled="screenName == 'MailScreenArchived'">
      Archived View
    </button>

    <suspense>
      <template #default>
        <MailScreen :screenName="screenName" />
      </template>
      <template #fallback>
        <p>Loading...</p>
      </template>
    </suspense>

    <div id="modal-portal"></div>
  </div>
</template>

<script>
import MailScreen from '@/components/MailScreen.vue';
import useEmailSelection from './composition/useEmailSelection';
import { ref } from 'vue'

export default {
  name: 'App',
  components: {
    MailScreen
  },
  setup(){  
    let screenName = ref('MailScreenInbox');
    let {emailSelection} = useEmailSelection();
    let selectScreen = function(newScreen){
      screenName.value = newScreen;
      emailSelection.clear();
    }
    return {screenName, selectScreen}
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

button {
  font-size: 16px;
  padding: 8px;
  border-radius: 3px;
  margin: 5px 10px 5px 0px;
}

input[type='checkbox'] {
  -webkit-appearance:none;
  cursor: pointer;
  width:24px;
  height:24px;
  background:white;
  border-radius: 2px;
  border: 1px solid #555;
  position: relative;
  vertical-align: middle;
  padding: 10px;
}

input[type='checkbox']:checked {
  background: #679;
}
</style>
