<template>
  <div class="email-display">
    <div class="toolbar">
      <button @click="toggleArchive">{{email.archived ? 'Move to Inbox (e)' : 'Archive (e)'}}</button>
      <button @click="toggleRead">{{email.read ? 'Mark Unread (r)' : 'Mark Read (r)'}}</button>
      <button @click="goNewer">Newer (k)</button>
      <button @click="goOlder">Older (j)</button>
    </div>

    <h2 class="mb-0">Subject: <strong>{{email.subject}}</strong></h2>
    <div><em>From {{email.from}} on {{format(new Date(email.sentAt), 'MMM do yyyy')}}</em></div>
    <div v-html="marked(email.body)" />
  </div>
</template>

<script>
  import { format } from 'date-fns';
  import marked from 'marked';
  import { useKeydown } from '../composition/useKeydown';

  export default {
    setup({changeEmail}){
      let toggleArchive = () => changeEmail({toggleArchive: true, save: true, closeModal: true})
      let toggleRead = () => changeEmail({toggleRead: true, save: true})
      let goNewer = () => changeEmail({indexChange: -1})
      let goOlder = () => changeEmail({indexChange: 1})
      let goNewerAndArchive = () => changeEmail({indexChange: -1, toggleArchive: true})
      let goOlderAndArchive = () => changeEmail({indexChange: 1, toggleArchive: true})

      useKeydown([
        {key: 'e', fn: toggleArchive},
        {key: 'r', fn: toggleRead},
        {key: 'k', fn: goNewer},
        {key: 'j', fn: goOlder},
        {key: '[', fn: goNewerAndArchive},
        {key: ']', fn: goOlderAndArchive}
      ])

      return {
        format,
        marked,
        goOlder,
        goNewer,
        toggleRead,
        toggleArchive
      }
    },
    props: {
      email: {
        type: Object,
        required: true
      },
      changeEmail: {
        type: Function,
        required: true
      }
    }
  }
</script>

<style scoped>

</style>