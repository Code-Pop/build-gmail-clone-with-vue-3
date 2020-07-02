<template>
  <div class="modal">
    <div class="overlay" @click="emit('closeModal')"></div>
    <div class="modal-card">
      <slot />
    </div>
  </div>
</template>

<script>
  import useKeydown from '../composables/use-keydown';

  export default {
    setup(props, {emit}) {
      useKeydown([
        {key: 'Escape', fn: () => { emit('closeModal') }},
      ])
    
      return {
        emit
      }
    }
  }
</script>

<style scoped>

</style>