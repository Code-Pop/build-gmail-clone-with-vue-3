<template>
  <h1>VMail Inbox</h1>

  <MailTable :emails="emails" />
</template>

<script>
  import MailTable from '@/components/MailTable.vue';
  export default {
    setup(props, {attrs, slots}){
      
      let emails = [{
        id: 1,
        subject: 'First Steps',
        body: 'Learning Vue with Vue 3, cool!',
        read: false,
        archived: false,
      }, {
        id: 2,
        subject: 'Vue 3 - pretty cool',
        body: 'Lots of really good features happening here',
        read: false,
        archived: false
      }, {
        id: 3,
        subject: 'Do we have a released date?',
        body: "I hear Q2 2020.",
        read: true,
        archived: false
      }]

      return {emails}
    },
    components: {
      MailTable
    }
  }
</script>

<style scoped>

</style>