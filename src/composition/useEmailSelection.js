import { reactive } from 'vue';
import axios from 'axios';

let emailSet = new Set() 
export const useEmailSelection = function(){
  const emails = reactive(emailSet)
  const forSelected = (fn) => {
    emails.forEach(email => {
      fn(email)
      axios.put(`http://localhost:3000/emails/${email.id}`, email)
    })
  }
  const clear = () => {
    emails.clear();
  }

  const emailSelection = {
    emails: emails,
    toggle(id) {
      if(emails.has(id)) {
        emails.delete(id)
      } else {
        emails.add(id);
      }
    },
    addMultiple(emails) {
      emails.forEach(email => {
        emails.add(email)
      })
    },
    clear: clear,
    markRead(){ forSelected(e => e.read = true )},
    markUnread(){ forSelected(e => e.read = false )},
    archive(){ forSelected(e => e.archived = true); clear();},
    moveToInbox(){ forSelected(e => e.archived = false); clear();}
  }

  return { emailSelection }
}

export default useEmailSelection;