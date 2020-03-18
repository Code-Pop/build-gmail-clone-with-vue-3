<template>
  <div class="bulk-action-bar">  
    <span v-if="!allSelected && emailSelection.emails.size > 0">-</span> <!-- later on this minus sign will be in the checkbox, as it is in gmail -->
    <input type="checkbox" :checked="allSelected" @click="bulkSelect">
    
    <button @click="emailSelection.markRead()">
      Mark Read
    </button>
    <button @click="emailSelection.markUnread()">
      Mark Unread
    </button>
  </div>
</template>

<script>
  import useEmailSelection from '../composition/useEmailSelection';
  import { computed } from 'vue';

  export default {
    setup({emails}){
      let {emailSelection} = useEmailSelection();
      let allSelected = computed(() => {
        return emails.length == emailSelection.emails.size;
      })
      let bulkSelect = function(){
        if(allSelected.value) {
          emailSelection.clear();
        } else {
          emailSelection.addMultiple(emails)
        }
      }
      return { emailSelection, allSelected, bulkSelect }
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