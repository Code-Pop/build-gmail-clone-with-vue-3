import { ref, reactive } from 'vue';

let emails = new Set();
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
    markRead(){
      this.emails.forEach(email => {
        email.read = true
      })
    },
    markUnread(){
      this.emails.forEach(email => {
        email.read = false
      })
    }
  })

  return {
    emailSelection,
  }
}

export default useEmailSelection;