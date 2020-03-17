import { Server, Model, Factory } from "miragejs"
import faker from 'faker';

new Server({
  models: {
    email: Model
  },
  factories: {
    email: Factory.extend({
      from(){
        return faker.internet.email()
      },
      subject() {
        return faker.lorem.word()
      },
      body(){
        return faker.lorem.paragraphs()
      },
      sentDate(){
        return faker.date.recent(20)
      }
    })
  },
  seeds(server){
    server.createList('email', 10);
  },
  routes() {
    this.namespace = 'api';

    this.get('/emails');
  }
})
