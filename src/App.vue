<template>
  <div id="app">

    <h1>VMail Inbox</h1>
    
    <table class="mail-table">
      <tbody>
        <tr v-for="email in sortedEmails" 
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
  </div>
</template>

<script>
import { format } from 'date-fns';

export default {
  name: 'App',
  data(){
    return {
      format,
      emails: [
        {
          "id": 1,
          "from": "team@vuemastery.com",
          "subject": "What's up with Vue 3.0? Here's how to find out from Evan You",
          "body": "The opening keynote of VueConf US this year was Evan You (the creator of Vue), giving his State of the Vuenion address. He walked us through the journey of getting Vue 3 from a prototype to a reality the past year. He also dove into Vue's overall growth in the community.",
          "sentAt": "2020-03-27T18:25:43.511Z",
          "archived": false,
          "read": true
        },
        {
          "id": 2,
          "from": "jeffrey@vuescreencasts.com",
          "subject": "Five new VueJS videos this week + new podcast episode",
          "body": "I hope you've been enjoying the Vue 3 course I've been releasing with Vue Mastery!\n\nThis week on VueScreencasts.com we have a follow-up video that digs further into what we covered in this week's Vue Mastery lesson, I answer a question that five of you asked about last week's most popular video, and we start a new series with a very awesome library author.\n\nFinally, for your ears only: a new episode of Exploring the Vueniverse.",
          "sentAt": "2020-05-03T18:25:43.511Z",
          "archived": false,
          "read": false
        },
        {
          "id": 3,
          "from": "damian@dulisz.com",
          "subject": "#177: Updated Vue.js Roadmap; Vuex v4.0.0-alpha.1 has been released; Kia King Ishii join the core team; Nuxt v2.12 released; Videos from Vue.js Amsterdam 2020 are here!",
          "body": "First of all, lets congratulate Kia King Ishii on joining the Vue.js core team! 🎉 He has been doing an incredible job building vuex-orm and will now focus on working on the next versions of Vuex.\n\nSpeaking of which – Vuex v4.0.0-alpha.1 has just been released! This is the version of Vuex that will work with Vue 3.0 but keep the familiar API you know from the current version.",
          "sentAt": "2020-03-18T18:25:43.511Z",
          "archived": false,
          "read": false
        },
        {
          "id": 4,
          "from": "anthony@vuejsdevelopers.com",
          "subject": "'Vue 3 Release Roadmap' + 6 more must-read articles from this week",
          "body": "Newsletter Issue #161",
          "sentAt": "2020-03-24T18:25:43.511Z",
          "archived": true,
          "read": false
        }
      ]
    }
  },
  computed: {
    unarchivedEmails(){
      return this.emails.filter(e => !e.archived)
    },
    sortedEmails(){
      return this.unarchivedEmails.sort((e1, e2) => {
        return e1.sentAt < e2.sentAt ? 1 : -1
      })
    }
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

/* Global Styles */

button {
  font-size: 16px;
  padding: 8px;
  border-radius: 3px;
  margin: 5px 10px 5px 0px;
  cursor: pointer;
}

button:disabled {
  cursor: auto;
}

.clickable {
  cursor: pointer;
}

input[type='checkbox'] {
  -webkit-appearance:none;
  cursor: pointer;
  width:24px;
  height:24px;
  background:white;
  border-radius: 2px;
  border: 1px solid #555;
  position: relative;
  vertical-align: middle;
  padding: 10px;
}

input[type='checkbox']:checked {
  background: #679;
}

.mb-0 {
  margin-bottom: 0;
}

/* Modal */

.modal, .overlay {
  width: 100%;
  height: 100%;
  position: fixed;
  left: 0;
  top: 0;
}
.overlay {
  opacity: 0.5;
  background-color: black;
}
.modal-card {
  position: relative;
  max-width: 80%;
  margin: auto;
  margin-top: 30px;
  padding: 20px;
  background-color: white;
  min-height: 500px;
  z-index: 10;
  opacity: 1;
}

/* Email Modal */

.email-display {
  text-align: left;
}

/* Mail Table */

.mail-table {
  max-width: 1000px;
  margin: auto;
  border-collapse: collapse;
}
.mail-table tr.read {
  background-color: #EEE;
}
.mail-table tr {
  height: 40px;
}
.mail-table td {
  border-bottom: 1px solid black;
  padding: 5px;
  text-align: left;
}
.mail-table tr:first-of-type td {
  border-top: 1px solid black;
}
.mail-table td p {
  max-height: 1.2em;
  overflow-y: hidden;
  margin: 0;
}

.mail-table td.date {
  width: 120px;
}

/* Bulk Action Bar */

.bulk-action-bar {
  width: 100%;
  max-width: 1000px;
  margin: auto;
  text-align: left;
  padding-bottom: 8px;
}

.bulk-action-bar input {
  margin: 5px;
}

.bulk-action-bar .checkbox {
  margin-right: 6px;
  margin-left: 3px;
}
</style>
