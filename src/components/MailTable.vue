<template>
  <table>
    <tbody>
      <tr v-for="email in emails" 
          :key="email.id"
          :class="[email.read ? 'read' : '']"
          @click="openEmail(email)"
          class="clickable">
        <td>
          <input type="checkbox" 
                  :checked="emailSelection.emails.has(email)"
                  @click="emailSelection.toggle(email)" />
        </td>
        <td>{{email.from}}</td>
        <td>
          <p><strong>{{email.subject}}</strong> - {{email.body}}</p>
        </td>
        <td class="date">{{format(new Date(email.sentAt), 'MMM do yyyy')}}</td>
      </tr>
    </tbody>

    <portal target="#modal-portal">
      <ModalView v-if="!!openedEmail" :closeModal="() => {openedEmail = null;}">
        <MailView :email="openedEmail" @changeEmail="changeEmail" />
      </ModalView>
    </portal>
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

      let changeEmail = function({amount}){
        let index = emails.findIndex(e => e == openedEmail.value);
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
  table {
    max-width: 1000px;
    margin: auto;
    border-collapse: collapse;
  }
  tr.read {
    background-color: #EEE;
  }
  tr {
    height: 40px;
  }
  td {
    border-bottom: 1px solid black;
    padding: 5px;
    text-align: left;
  }
  td p {
    max-height: 1.2em;
    overflow-y: hidden;
    margin: 0;
  }

  td.date {
    width: 120px;
  }

  .clickable {
    cursor: pointer;
  }
</style>