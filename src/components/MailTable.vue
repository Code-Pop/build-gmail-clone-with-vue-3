<template>
  <table>
    <thead>

    </thead>
    <tbody>
      <tr v-for="email in emails" :key="email.id">
        <td><input type="checkbox" /></td>
        <td>{{email.subject}}</td>
        <td>{{email.body}}</td>
      </tr>
    </tbody>
  </table>
</template>

<script>
  export default {
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
  }
  td {
    text-align: left;
  }
</style>