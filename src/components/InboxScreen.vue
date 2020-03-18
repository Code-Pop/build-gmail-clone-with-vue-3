<template>
  <h1>VMail Inbox</h1>
  
  <BulkActionBar :emails="emails" />

  <MailTable :emails="emails.filter(e => !e.archived)" />
</template>

<script>
  import MailTable from '@/components/MailTable.vue';
  import BulkActionBar from '@/components/BulkActionBar.vue';

  export default {
    async setup(props, {attrs, slots}){
      let response = await fetch('/api/emails');
      let {emails} = await response.json();

      return {emails}
    },
    components: {
      MailTable,
      BulkActionBar
    }
  }
</script>

<style scoped>

</style>