<template>
  <div class="email" v-if="email">
    <div class="toolbar">
      <button @click="archive">Archive</button>
      <button @click="goNewer">Newer</button>
      <button @click="goOlder">Older</button>
      <button @click="toggleRead(email)">Mark {{email.read ? 'Unread' : 'Read'}}</button>
    </div>

    <div>From: {{email.from}}</div>
    <div>Subject: <strong>{{email.subject}}</strong></div>
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
      let goNewerAndArchive = () => emit('changeEmail', {amount: -1, archive: true})
      let goOlderAndArchive = () => emit('changeEmail', {amount: 1, archive: true})
      let archive = () => emit('changeEmail', {archive: true, closeModal: true})
      let toggleRead = (email) => { email.read = !email.read }

      useKeydown([
        {key: 'k', fn: goNewer}, 
        {key: 'j', fn: goOlder},
        {key: '[', fn: goNewerAndArchive},
        {key: ']', fn: goOlderAndArchive},
        {key: 'e', fn: archive}
      ])

      let emailMarkdown = marked(email.body);
      return {
        emailMarkdown,
        archive,
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