<template>
  <h1>VMail Archives</h1>
  
  <BulkActionBar :emails="archivedEmails" />

  <MailTable :emails="archivedEmails" />
</template>

<script>
  import MailTable from '@/components/MailTable.vue';
  import BulkActionBar from '@/components/BulkActionBar.vue';

  import { computed } from 'vue';

  export default {
    async setup({emails}){
      let archivedEmails = computed(() => {
        return emails.filter(e => e.archived)
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