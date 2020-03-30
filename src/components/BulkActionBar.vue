<template>
  <div>
    <input type="checkbox" 
           :checked="allAreSelected"
           :class="[partialSelection ? 'partial-check' : '']">
  </div>
</template>

<script>
  import { useEmailSelection } from '../composition/useEmailSelection';
  import { computed } from 'vue';

  export default {
    setup({emails}){
      let { emailSelection } = useEmailSelection();

      let numberSelected = computed(() => {
        return emailSelection.emails.size;
      }) 
      let allAreSelected = computed(() => {
        return emails.length == numberSelected.value;
      })
      let partialSelection = computed(() => {
        return numberSelected.value > 0 && !allAreSelected.value;
      })

      return { 
        partialSelection, 
        allAreSelected
      }
    },
    props: {
      emails: {
        type: Array,
        required: true
      }
    }
  }
</script>

<style scoped>

</style>