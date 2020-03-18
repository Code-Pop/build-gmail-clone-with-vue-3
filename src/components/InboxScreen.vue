<template>
  <h1>VMail Inbox</h1>
  
  <p>Number selected: {{emailSelection.emails.size}}</p>
  <button @click="emailSelection.markRead()">Mark Selected Read</button>
  <button @click="emailSelection.markUnread()">Mark Selected Unread</button>

  <MailTable :emails="emails" />
</template>

<script>
  import MailTable from '@/components/MailTable.vue';
  import useEmailSelection from '../composition/useEmailSelection';

  export default {
    async setup(props, {attrs, slots}){
      let response = await fetch('/api/emails');
      let {emails} = await response.json();

      let {emailSelection} = useEmailSelection();

      return {emails, emailSelection}
    },
    components: {
      MailTable
    }
  }
</script>

<style scoped>

</style>