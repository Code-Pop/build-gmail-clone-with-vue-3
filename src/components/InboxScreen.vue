<template>
  <h1>VMail Inbox</h1>
  
  <p>Number selected: {{emailSelection.ids.size}}</p>

  <MailTable :emails="emails" />
</template>

<script>
  import MailTable from '@/components/MailTable.vue';
  import useEmailSelection from '../composition/useEmailSelection';

  export default {
    async setup(props, {attrs, slots}){
      let response = await fetch('/api/emails');
      let {emails} = await response.json();

      let {emailSelection} = useEmailSelection();

      return {emails, emailSelection}
    },
    components: {
      MailTable
    }
  }
</script>

<style scoped>

</style>