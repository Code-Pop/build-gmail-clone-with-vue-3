<template>
  <div>
    <component :is="screenName" :emails="emails.sort((e1, e2) => e1.sentAt < e2.sentAt ? 1 : -1)" />
  </div>
</template>

<script>
  import MailScreenArchived from '@/components/MailScreenArchived.vue';
  import MailScreenInbox from '@/components/MailScreenInbox.vue';
  import { ref } from 'vue';
  import axios from 'axios';

  export default {
    async setup(){
      let {data} = await axios.get('http://localhost:3000/emails');
      let emails = ref(data);

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