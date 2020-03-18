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