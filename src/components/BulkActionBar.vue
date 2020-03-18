<template>
  <div class="bulk-action-bar">  
    <span v-if="!allAreSelected && numberSelected > 0">-</span> <!-- later on this minus sign will be in the checkbox, as it is in gmail -->
    <input type="checkbox" :checked="allAreSelected" @click="bulkSelect">
    
    <button @click="emailSelection.markRead()" :disabled="Array.from(emailSelection.emails).every(e => e.read)">
      Mark Read
    </button>
    <button @click="emailSelection.markUnread()" :disabled="Array.from(emailSelection.emails).every(e => !e.read)">
      Mark Unread
    </button>
    <button @click="emailSelection.archive()" :disabled="numberSelected == 0">
      Archive
    </button>
  </div>
</template>

<script>
  import useEmailSelection from '../composition/useEmailSelection';
  import { computed } from 'vue';

  export default {
    setup({emails}){
      let {emailSelection} = useEmailSelection();
      let numberSelected = computed(() => {
        return emailSelection.emails.size;
      }) 
      let allAreSelected = computed(() => {
        return emails.length == numberSelected;
      })
      
      let bulkSelect = function(){
        if(allAreSelected.value) {
          emailSelection.clear();
        } else {
          emailSelection.addMultiple(emails)
        }
      }
      return { emailSelection, allAreSelected, bulkSelect, numberSelected }
    },
    props: {
      emails: {
        type: Array,
        default: []
      }
    }
  }
</script>

<style scoped>

</style>