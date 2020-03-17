import { createApp } from 'vue';
import App from './App.vue';

import { Server } from "miragejs"

new Server({
  routes() {
    this.namespace = 'api';

    this.get('/emails', async () => {
      return [{
        id: 1,
        subject: 'First Steps',
        body: 'Learning Vue with Vue 3, cool!',
        read: false,
        archived: false,
      }, {
        id: 2,
        subject: 'Vue 3 - pretty cool',
        body: 'Lots of really good features happening here',
        read: false,
        archived: false
      }, {
        id: 3,
        subject: 'Do we have a released date?',
        body: "I hear Q2 2020.",
        read: true,
        archived: false
      }]
    }, {timing: 2000})
  }
})

createApp(App).mount('#app');
