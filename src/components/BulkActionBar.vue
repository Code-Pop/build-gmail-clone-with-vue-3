<template>
  <div class="bulk-action-bar">
    <span class="checkbox">
      <input type="checkbox" :checked="allAreSelected" @click="bulkSelect">
      <span v-if="!allAreSelected && numberSelected > 0">-</span> <!-- later on this minus sign will be in the checkbox, as it is in gmail -->
    </span>
    
    <span class="buttons">
      <button @click="emailSelection.markRead()"
              :disabled="Array.from(emailSelection.emails).every(e => e.read)"
              v-if="actions.includes('markRead')">
        Mark Read
      </button>
      <button @click="emailSelection.markUnread()" 
              :disabled="Array.from(emailSelection.emails).every(e => !e.read)"
              v-if="actions.includes('markUnread')">
        Mark Unread
      </button>
      <button @click="emailSelection.archive()" 
              :disabled="numberSelected == 0"
              v-if="actions.includes('archive')">
        Archive
      </button>
      <button @click="emailSelection.moveToInbox()"
              :disabled="numberSelected == 0"
              v-if="actions.includes('moveToInbox')">
        Move to Inbox
      </button>
    </span>
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
        return emails.length == numberSelected.value;
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
      },
      actions: {
        type: Array,
        default: ['markRead', 'markUnread']
      }
    }
  }
</script>

<style scoped>
  .bulk-action-bar {
    width: 100%;
    max-width: 1000px;
    margin: auto;
    text-align: left;
  }

  input {
    margin: 5px;
  }
  
  .checkbox {
    margin-right: 6px;
    margin-left: 3px;
  }
</style>