<template>
  <h1>VMail Inbox</h1>
  
  <BulkActionBar :emails="inboxEmails" :actions="['markRead', 'markUnread', 'archive']" />

  <MailTable :emails="inboxEmails" />
</template>

<script>
  import MailTable from '@/components/MailTable.vue';
  import BulkActionBar from '@/components/BulkActionBar.vue';

  import { computed } from 'vue';

  export default {
    async setup({emails}){
      let inboxEmails = computed(() => {
        return emails.filter(e => !e.archived)
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