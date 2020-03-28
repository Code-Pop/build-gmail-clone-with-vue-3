<template>
  <h1>VMail Inbox</h1>
  
  <BulkActionBar :emails="inboxEmails" :actions="['markRead', 'markUnread', 'archive']" />

  <MailTable :emails="inboxEmails" />
</template>

<script>
  import MailTable from '@/components/MailTable.vue';
  import BulkActionBar from '@/components/BulkActionBar.vue';

  export default {
    components: {
      MailTable,
      BulkActionBar
    },
    computed: {
      inboxEmails(){
        return this.emails.filter(e => !e.archived)
      }
    },
    props: {
      emails: {
        type: Object,
        required: true
      }
    }
  }
</script>

<style scoped>

</style>