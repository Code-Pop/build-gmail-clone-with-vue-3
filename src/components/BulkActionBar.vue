<template>
  <div>
    <input type="checkbox" 
           :checked="allAreSelected"
           :class="[partialSelection ? 'partial-check' : '']"
           @click="bulkSelect">
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
      
      let bulkSelect = function(){
        if(allAreSelected.value) {
          emailSelection.clear();
        } else {
          emailSelection.addMultiple(emails)
        }
      }

      return { 
        partialSelection, 
        allAreSelected,
        bulkSelect
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