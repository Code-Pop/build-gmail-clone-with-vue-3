<template>
  <div class="email" v-if="email">
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
      useKeydown([
        {key: 'k', fn: () => emit('changeEmail', {amount: -1})}, 
        {key: 'j', fn: () => emit('changeEmail', {amount: 1})},
        {key: '[', fn: () => emit('changeEmail', {amount: -1, archive: true})},
        {key: ']', fn: () => emit('changeEmail', {amount: 1, archive: true})},
        {key: 'e', fn: () => emit('changeEmail', {archive: true, closeModal: true})}
      ])

      let emailMarkdown = marked(email.body);
      return {
        emailMarkdown
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