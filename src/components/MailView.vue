<template>
  <div>
    From: {{email.from}}<br>
    Subject: <strong>{{email.subject}}</strong>
    <p>{{email.body}}</p>
  </div>
</template>

<script>
  export default {
    props: {
      email: {
        type: Object
      },
    }
  }
</script>

<style scoped>
</style>