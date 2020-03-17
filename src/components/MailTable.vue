<template>
  <table>
    <thead>

    </thead>
    <tbody>
      <tr v-for="email in emails" :key="email.id" :class="[email.read ? 'read' : '']">
        <td><input type="checkbox" /></td>
        <td>{{email.subject}}</td>
        <td>{{email.body}}</td>
        <td>{{format(new Date(email.sentDate), 'HH:MM MMM do yyyy')}}</td>
      </tr>
    </tbody>
  </table>
</template>

<script>
  import { format } from 'date-fns'
  export default {
    setup(){
      return {format}
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
  table {
    max-width: 800px;
    margin: auto;
    border-collapse: collapse;
  }
  tr.read {
    background-color: #EEE;
  }
  td {
    border-bottom: 1px solid black;
    padding: 5px;
    text-align: left;
  }
</style>