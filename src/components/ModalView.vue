<template>
  <div class="modal">
    <div class="overlay" @click="closeModal()"></div>
    <div class="modal-card">
      <slot :closeModal="closeModal" />
    </div>
  </div>
</template>

<script>
  export default {
    mounted: function () {
      window.addEventListener('keydown', this.onkey)
    },
    beforeUnmount: function () {
      window.removeEventListener('keydown', this.onkey)
    },
    methods: {
      onkey(event){

        if(event.key == 'Escape') {
          this.closeModal()
        }
      }
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