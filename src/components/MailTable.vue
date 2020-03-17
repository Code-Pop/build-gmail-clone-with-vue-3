<template>
  <table>
    <thead>

    </thead>
    <tbody>
      <tr v-for="email in emails" :key="email.id" :class="[email.read ? 'read' : '']">
        <td><input type="checkbox" /></td>
        <td>{{email.from}}</td>
        <td>
          <p><strong>{{email.subject}}</strong> - {{email.body}}</p>
        </td>
        <td class="date">{{format(new Date(email.sentDate), 'MMM do yyyy')}}</td>
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
</style>