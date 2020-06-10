<template>
  <div class="modal">
    <div class="overlay" @click="closeModal"></div>
    <div class="modal-card">
      <slot />
    </div>
  </div>
</template>

<script>
  import { useKeydown } from '../composition/useKeydown';

  export default {
    setup({closeModal}){
      useKeydown([{key: 'Escape', fn: closeModal}])
    },
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