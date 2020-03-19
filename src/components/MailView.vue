<template>
  <div class="email" v-if="email">
    <div>From: {{email.from}}</div>
    <div>Subject: <strong>{{email.subject}}</strong></div>
    <div v-html="emailMarkdown" />
  </div>
</template>

<script>
  import marked from 'marked';
  export default {
    setup({email}) {
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