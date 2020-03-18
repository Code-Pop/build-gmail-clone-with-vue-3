<template>
  <div>
    <component :is="screenName" :emails="emails" />
  </div>
</template>

<script>
  import MailScreenArchived from '@/components/MailScreenArchived.vue';
  import MailScreenInbox from '@/components/MailScreenInbox.vue';
  import { ref } from 'vue';

  export default {
    async setup(){
      let response = await fetch('/api/emails');
      let {emails} = await response.json();

      emails = ref(emails);

      return {emails};
    },
    components: {
      MailScreenArchived,
      MailScreenInbox
    },
    props: {
      screenName: {
        type: String,
        required: true
      }
    }
  }
</script>

<style scoped>

</style>