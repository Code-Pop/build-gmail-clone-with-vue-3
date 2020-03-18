<template>
  <h1>VMail Inbox</h1>
  
  <BulkActionBar :emails="inboxEmails" />

  <MailTable :emails="inboxEmails" />
</template>

<script>
  import MailTable from '@/components/MailTable.vue';
  import BulkActionBar from '@/components/BulkActionBar.vue';

  import { computed, ref } from 'vue';

  export default {
    async setup(props, {attrs, slots}){
      let response = await fetch('/api/emails');
      let {emails} = await response.json();

      emails = ref(emails);
      let inboxEmails = computed(() => {
        return emails.value.filter(e => !e.archived)
      })

      return {inboxEmails}
    },
    components: {
      MailTable,
      BulkActionBar
    }
  }
</script>

<style scoped>

</style>