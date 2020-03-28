<template>
  <h1>VMail Archives</h1>
  
  <BulkActionBar :emails="archivedEmails" :actions="['markRead', 'markUnread', 'moveToInbox']" />

  <MailTable :emails="archivedEmails" />
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
      archivedEmails(){
        return this.emails.filter(e => e.archived)
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