<template>
  <div class="modal" v-if="email">
    <div class="overlay"></div>
    <div class="modal-card">
      From: {{email.from}}<br>
      Subject: <strong>{{email.subject}}</strong>
      <p>{{email.body}}</p>
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      email: {
        type: Object
      },
      isOpened: {
        type: Boolean,
        default: true
      }
    }
  }
</script>

<style scoped>
  .modal, .overlay {
    width: 100%;
    height: 100%;
    position: fixed;
    left: 0;
    top: 0;
  }
  .overlay {
    opacity: 0.5;
    background-color: black;
  }
  .modal-card {
    position: relative;
    max-width: 80%;
    margin: auto;
    margin-top: 30px;
    padding: 20px;
    background-color: white;
    min-height: 500px;
    z-index: 10;
    opacity: 1;
  }
</style>