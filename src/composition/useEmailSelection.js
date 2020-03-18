import { ref, reactive } from 'vue';

let emails = new Set();
export const useEmailSelection = function(){

  let emailSelection = reactive({
    emails: emails,
    toggle: function(id) {
      if(this.emails.has(id)) {
        this.emails.delete(id)
      } else {
        this.emails.add(id);
      }
    }
  })

  return {
    emailSelection,
  }
}

export default useEmailSelection;