import { ref, reactive } from 'vue';

let ids = new Set(['1', '5']);
export const useEmailSelection = function(){

  let emailSelection = reactive({
    ids: ids,
    toggle: function(id) {
      if(this.ids.has(id)) {
        this.ids.delete(id)
      } else {
        this.ids.add(id);
      }
    }
  })

  return {
    emailSelection,
  }
}

export default useEmailSelection;