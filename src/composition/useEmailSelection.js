import { ref } from 'vue';

export const useEmailSelection = function(){
  let selectedEmailIds = ref(new Set(['1', '5']))

  let toggleEmailSelection = (id) => {
    if(selectedEmailIds.value.has(id)) {
      selectedEmailIds.value.delete(id)
    } else {
      selectedEmailIds.value.add(id);
    }
  }

  return {
    selectedEmailIds,
    toggleEmailSelection
  }
}

export default useEmailSelection;