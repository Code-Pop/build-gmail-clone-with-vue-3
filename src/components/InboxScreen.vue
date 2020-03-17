<template>
  <h1>VMail Inbox</h1>

  <MailTable :emails="emails" />
</template>

<script>
  import MailTable from '@/components/MailTable.vue';
  import { ref } from 'vue';
  export default {
    async setup(props, {attrs, slots}){
      let response = await fetch('/api/emails');
      let emails = await response.json();

      return {emails}
    },
    components: {
      MailTable
    }
  }
</script>

<style scoped>

</style>