<template>
  <button @click="selectScreen('inbox');"
          :disabled="selectedScreen == 'inbox'">
    Inbox View
  </button>
  <button @click="selectScreen('archive')" 
          :disabled="selectedScreen == 'archive'">
    Archived View
  </button>
  
  <h1>VMail Inbox</h1>

  <BulkActionBar :emails="filteredEmails" />

  <MailTable :emails="filteredEmails" />
</template>

<script>
  import axios from 'axios';

  import MailTable from '@/components/MailTable.vue';
  import BulkActionBar from '@/components/BulkActionBar.vue';
  import { useEmailSelection } from '../composition/useEmailSelection';

  export default {
    async setup(){
      let response = await axios.get('http://localhost:3000/emails');
      let emails = response.data;
      let selectedScreen = 'archive';
      let {emailSelection} = useEmailSelection();

      return { 
        emails,
        selectedScreen,
        emailSelection
      }
    },
    components: {
      BulkActionBar,
      MailTable
    },
    methods: {
      selectScreen(newScreen) {
        this.selectedScreen = newScreen;
        this.emailSelection.clear();
      }
    },
    computed: {
      sortedEmails(){
        return this.emails.sort((e1, e2) => {
          return e1.sentAt < e2.sentAt ? 1 : -1
        })
      },
      unarchivedEmails(){
        return this.sortedEmails.filter(e => !e.archived)
      },
      archivedEmails(){
        return this.sortedEmails.filter(e => e.archived)
      },
      filteredEmails(){
        let filters = {
          inbox: this.unarchivedEmails,
          archive: this.archivedEmails
        }
        return filters[this.selectedScreen]
      }
    }
  }
</script>

<style scoped>

</style>