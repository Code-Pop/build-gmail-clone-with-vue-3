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
      })
    },
    markRead(){ this.forSelected(e => e.read = true )},
    markUnread(){ this.forSelected(e => e.read = false )},
  })

  return {
    emailSelection,
  }
}

export default useEmailSelection;