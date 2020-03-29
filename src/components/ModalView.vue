<template>
  <div class="modal">
    <div class="overlay" @click="closeModal"></div>
    <div class="modal-card">
      <slot />
    </div>
  </div>
</template>

<script>
  import { onBeforeUnmount } from 'vue';

  export default {
    setup({closeModal}){
      let onKeydown = (event) => {
        if(event.key == 'Escape') {
          closeModal()
        }
      }

      window.addEventListener('keydown', onKeydown)

      onBeforeUnmount(() => {
        window.removeEventListener('keydown', onKeydown)
      })
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