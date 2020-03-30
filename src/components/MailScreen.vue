<template>
  <h1>VMail Inbox</h1>

  <BulkActionBar :emails="unarchivedEmails" />

  <MailTable :emails="unarchivedEmails" />
</template>

<script>
  import axios from 'axios';

  import MailTable from '@/components/MailTable.vue';
  import BulkActionBar from '@/components/BulkActionBar.vue';

  export default {
    async setup(){
      let response = await axios.get('http://localhost:3000/emails');
      let emails = response.data;

      return { emails }
    },
    components: {
      BulkActionBar,
      MailTable
    },
    computed: {
      sortedEmails(){
        return this.emails.sort((e1, e2) => {
          return e1.sentAt < e2.sentAt ? 1 : -1
        })
      },
      unarchivedEmails(){
        return this.sortedEmails.filter(e => !e.archived)
      },
    }
  }
</script>

<style scoped>

</style>