<template>
  <h1>VMail Archives</h1>
  
  <BulkActionBar :emails="archivedEmails" />

  <MailTable :emails="archivedEmails" />
</template>

<script>
  import MailTable from '@/components/MailTable.vue';
  import BulkActionBar from '@/components/BulkActionBar.vue';

  import { computed, ref } from 'vue';

  export default {
    async setup(){
      let response = await fetch('/api/emails');
      let {emails} = await response.json();

      emails = ref(emails);
      let archivedEmails = computed(() => {
        return emails.value.filter(e => e.archived)
      })

      return {archivedEmails}
    },
    components: {
      MailTable,
      BulkActionBar
    }
  }
</script>

<style scoped>

</style>