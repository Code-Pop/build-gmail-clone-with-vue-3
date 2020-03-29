<template>
  <table class="mail-table">
    <tbody>
      <tr v-for="email in unarchivedEmails" 
          :key="email.id"
          :class="[email.read ? 'read': '', 'clickable']"
          @click="email.read = true">
        <td>
          <input type="checkbox" />
        </td>
        <td>{{email.from}}</td>
        <td>
          <p><strong>{{email.subject}}</strong> - {{email.body}}</p>
        </td>
        <td class="date">{{format(new Date(email.sentAt), 'MMM do yyyy')}}</td>
        <td><button @click="email.archived = true">Archive</button></td>
      </tr>
    </tbody>
  </table>
</template>

<script>
  import { format } from 'date-fns';
  import axios from 'axios';

  export default {
    async setup(){
      let response = await axios.get('http://localhost:3000/emails');
      let emails = response.data;
      return {
        format,
        emails
      }
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
    }
  }
</script>

<style scoped>

</style>