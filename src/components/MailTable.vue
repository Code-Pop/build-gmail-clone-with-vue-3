<template>
  <table class="mail-table">
    <tbody>
      <tr v-for="email in unarchivedEmails" 
          :key="email.id"
          :class="[email.read ? 'read': '', 'clickable']"
          @click="openEmail(email)">
        <td>
          <input type="checkbox" />
        </td>
        <td>{{email.from}}</td>
        <td>
          <p><strong>{{email.subject}}</strong> - {{email.body}}</p>
        </td>
        <td class="date">{{format(new Date(email.sentAt), 'MMM do yyyy')}}</td>
        <td><button @click="archiveEmail(email)">Archive</button></td>
      </tr>
    </tbody>
  </table>

  <ModalView v-if="openedEmail" :closeModal="() => { openedEmail = null; }">
    <MailView v-if="openedEmail" 
              :email="openedEmail"
              :changeEmail="(args) => changeEmail(openedEmail, args)" />
  </ModalView>
</template>

<script>
  import { format } from 'date-fns';
  import axios from 'axios';
  import MailView from '@/components/MailView.vue';
  import ModalView from '@/components/ModalView.vue';

  export default {
    async setup(){
      let response = await axios.get('http://localhost:3000/emails');
      let emails = response.data;
      let openedEmail = null;
      return {
        format,
        emails,
        openedEmail
      }
    },
    components: {
      MailView,
      ModalView
    },
    computed: {
      unarchivedEmails(){
        return this.sortedEmails.filter(e => !e.archived)
      },
      sortedEmails(){
        return this.emails.sort((e1, e2) => {
          return e1.sentAt < e2.sentAt ? 1 : -1
        })
      }
    },
    methods: {
      openEmail(email){
        this.openedEmail = email;

        if(email) {
          email.read = true
          axios.put(`http://localhost:3000/emails/${email.id}`, email)
        }
      },
      archiveEmail(email){
        email.archived = true;
        axios.put(`http://localhost:3000/emails/${email.id}`, email)
      },
      changeEmail(email, {indexChange, toggleArchive, toggleRead, save, closeModal}) {
        if(toggleArchive) { email.archived = !email.archived }
        if(toggleRead) { email.read = !email.read }
        if(save) { axios.put(`http://localhost:3000/emails/${email.id}`, email) }
        if(closeModal) { this.openedEmail = null; return null; }

        if(indexChange) {
          let emails = this.unarchivedEmails
          let index = emails.findIndex(e => e == email);
          this.openEmail(emails[index + indexChange])
        }
      }
    }
  }
</script>

<style scoped>

</style>