<template>
  <div class="bulk-action-bar">  
    <button @click="emailSelection.markRead()">
      Mark Read
    </button>
    <button @click="emailSelection.markUnread()">
      Mark Unread
    </button>
  </div>
</template>

<script>
  import useEmailSelection from '../composition/useEmailSelection';

  export default {
    setup(){
      let {emailSelection} = useEmailSelection();
      return { emailSelection }
    }

  }
</script>

<style scoped>

</style>