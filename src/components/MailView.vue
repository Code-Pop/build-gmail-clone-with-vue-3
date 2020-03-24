<template>
  <div class="email" v-if="email">
    <div class="toolbar">
      <button @click="toggleArchive">{{email.archived ? 'Move to Inbox' : 'Archive'}}</button>
      <button @click="goNewer">Newer</button>
      <button @click="goOlder">Older</button>
      <button @click="toggleRead(email)">Mark {{email.read ? 'Unread' : 'Read'}}</button>
    </div>

    <div>From: {{email.from}}</div>
    <h2>Subject: <strong>{{email.subject}}</strong></h2>
    <div v-html="emailMarkdown" />
  </div>
</template>

<script>
  import marked from 'marked';
  import { useKeydown } from '../composition/useKeydown';

  export default {
    setup({email}, {emit}) {
      let goNewer = () => emit('changeEmail', {amount: -1})
      let goOlder = () => emit('changeEmail', {amount: 1})
      let goNewerAndArchive = () => emit('changeEmail', {amount: -1, toggleArchive: true})
      let goOlderAndArchive = () => emit('changeEmail', {amount: 1, toggleArchive: true})
      let toggleArchive = () => emit('changeEmail', {toggleArchive: true, closeModal: true})
      let toggleRead = (email) => { email.read = !email.read }

      useKeydown([
        {key: 'k', fn: goNewer}, 
        {key: 'j', fn: goOlder},
        {key: '[', fn: goNewerAndArchive},
        {key: ']', fn: goOlderAndArchive},
        {key: 'e', fn: toggleArchive}
      ])

      let emailMarkdown = marked(email.body);
      return {
        emailMarkdown,
        toggleArchive,
        goNewer,
        goOlder,
        toggleRead
      }
    },
    props: {
      email: {
        type: Object
      },
    }
  }
</script>

<style scoped>
.email {
  text-align: left;
}
</style>