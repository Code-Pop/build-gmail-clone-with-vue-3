<template>
  <div class="modal">
    <div class="overlay" @click="closeModal"></div>
    <div class="modal-card">
      <slot />
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      closeModal: {
        type: Function,
        required: true
      }
    }
  }
</script>

<style scoped>

</style>