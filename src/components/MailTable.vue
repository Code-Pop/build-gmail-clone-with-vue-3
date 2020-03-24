<template>
  <table class="mail-table">
    <tbody>
      <tr v-for="email in emails" 
          :key="email.id"
          :class="[email.read ? 'read' : '']"
          @click="openEmail(email)"
          class="clickable">
        <td>
          <input type="checkbox" 
                 :checked="emailSelection.emails.has(email)"
                 @click="emailSelection.toggle(email)">
        </td>
        <td>{{email.from}}</td>
        <td>
          <p><strong>{{email.subject}}</strong> - {{email.body}}</p>
        </td>
        <td class="date">{{format(new Date(email.sentAt), 'MMM do yyyy')}}</td>
      </tr>
    </tbody>

    <ModalView v-if="!!openedEmail" :closeModal="() => {openedEmail = null;}">
      <MailView :email="openedEmail" @changeEmail="(args) => changeEmail(emails, args)" />
    </ModalView>
  </table>
</template>

<script>
  import { format } from 'date-fns'
  import useEmailSelection from '../composition/useEmailSelection';
  import MailView from '@/components/MailView.vue';
  import ModalView from '@/components/ModalView.vue';
  import { ref } from 'vue';

  export default {
    setup({emails}){
      let {emailSelection} = useEmailSelection();
      let openedEmail = ref();

      let openEmail = function(email) {
        openedEmail.value = email;

        if(email) {
          openedEmail.value.read = true;
        }
      }

      function changeEmail(emails, {amount, toggleArchive, closeModal}){
        let index = emails.findIndex(e => e == openedEmail.value);

        if(toggleArchive) { emails[index].archived = !emails[index].archived }
        if(closeModal) { openedEmail.value = null; return null; }

        openEmail(emails[index + amount])
      }

      return {format, emailSelection, openedEmail, openEmail, changeEmail}
    },
    props: {
      emails: {
        type: Array,
        default: []
      }
    },
    components: {
      MailView,
      ModalView
    }
  }
</script>

<style scoped>
  
</style>