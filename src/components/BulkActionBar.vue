<template>
  <div class="bulk-action-bar">
    <span class="checkbox">
      <input type="checkbox"
            :checked="allEmailsSelected"
            :class="[someEmailsSelected ? 'partial-check' : '']"
            @click="bulkSelect" />
    </span>
    <span class="buttons">
      <button @click="emailSelection.markRead">Mark Read</button>
      <button @click="emailSelection.markUnread">Mark Unread</button>
      <button @click="emailSelection.archive">Archive</button>
    </span>
  </div>
</template>

<script>
  import useEmailSelection from '@/composables/use-email-selection';
  import { computed } from 'vue'
  export default {
    setup(props){
      let emailSelection = useEmailSelection();
      let numberSelected = computed(() => emailSelection.emails.size)
      let numberEmails = props.emails.length
      let allEmailsSelected = computed(() => numberSelected.value === numberEmails)
      let someEmailsSelected = computed(() => {
        return numberSelected.value > 0 && numberSelected.value < numberEmails
      })
      let bulkSelect = function(){
        if(allEmailsSelected.value) {
          emailSelection.clear()
        } else {
          emailSelection.addMultiple(props.emails)
        }
      }
      return {
        allEmailsSelected,
        someEmailsSelected,
        bulkSelect,
        emailSelection
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