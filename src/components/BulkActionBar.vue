<template>
  <div class="bulk-action-bar">
    <span class="checkbox">
      <input type="checkbox" 
             :checked="allAreSelected"
             :class="[partialSelection ? 'partial-check' : '']"
             @click="bulkSelect">
    </span>
    
    <span class="buttons">
      <button @click="emailSelection.markRead()"
              :disabled="Array.from(emailSelection.emails).every(e => e.read)">
        Mark Read
      </button>
      <button @click="emailSelection.markUnread()" 
              :disabled="Array.from(emailSelection.emails).every(e => !e.read)">
        Mark Unread
      </button>
      <button v-if="selectedScreen == 'inbox'"
              @click="emailSelection.archive()" 
              :disabled="numberSelected == 0">
        Archive
      </button>
      <button v-else
              @click="emailSelection.moveToInbox()" 
              :disabled="numberSelected == 0">
        Move to Inbox
      </button>
    </span>
  </div>
</template>

<script>
  import { useEmailSelection } from '../composition/useEmailSelection';
  import { computed } from 'vue';

  export default {
    setup(props){
      let emailSelection = useEmailSelection();

      let numberSelected = computed(() => {
        return emailSelection.emails.size;
      }) 
      let allAreSelected = computed(() => {
        return props.emails.length == numberSelected.value && numberSelected.value !== 0;
      })
      let partialSelection = computed(() => {
        return numberSelected.value > 0 && !allAreSelected.value;
      })
      
      let bulkSelect = function(){
        if(allAreSelected.value) {
          emailSelection.clear();
        } else {
          emailSelection.addMultiple(props.emails)
        }
      }

      return { 
        partialSelection, 
        allAreSelected,
        bulkSelect,
        emailSelection,
        numberSelected
      }
    },
    props: {
      emails: {
        type: Array,
        required: true
      }, 
      selectedScreen: {
        type: String,
        required: true
      }
    }
  }
</script>

<style scoped>

</style>