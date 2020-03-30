import { reactive } from 'vue';
import axios from 'axios';

let emails = new Set() 
export const useEmailSelection = function(){
  let emailSelection = reactive({
    emails: emails,
    toggle(id) {
      if(this.emails.has(id)) {
        this.emails.delete(id)
      } else {
        this.emails.add(id);
      }
    },
    clear(){
      this.emails.clear();
    },
    addMultiple(emails) {
      emails.forEach(email => {
        this.emails.add(email)
      })
    },
    forSelected(fn){
      this.emails.forEach(email => {
        fn(email)
        axios.put(`http://localhost:3000/emails/${email.id}`, email)
      })
    },
    markRead(){ this.forSelected(e => e.read = true )},
    markUnread(){ this.forSelected(e => e.read = false )},
    archive(){ this.forSelected(e => e.archived = true); this.clear();},
    moveToInbox(){ this.forSelected(e => e.archived = false); this.clear();}
  })

  return { emailSelection }
}

export default useEmailSelection;