<template>
  <h1>VMail Inbox</h1>

  Number selected: {{selectedEmailIds.size}}

  <MailTable :emails="emails" />
</template>

<script>
  import MailTable from '@/components/MailTable.vue';
  import useEmailSelection from '../composition/useEmailSelection';

  export default {
    async setup(props, {attrs, slots}){
      let response = await fetch('/api/emails');
      let {emails} = await response.json();

      let {selectedEmailIds} = useEmailSelection();

      return {emails, selectedEmailIds}
    },
    components: {
      MailTable
    }
  }
</script>

<style scoped>

</style>