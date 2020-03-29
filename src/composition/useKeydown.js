import { onBeforeUnmount } from 'vue';

export const useKeydown = function(keyCombo) {
  let onkey = function(event) {
    if(keyCombo.key == event.key) {
      keyCombo.fn()
    }
  }

  window.addEventListener('keydown', onkey);

  onBeforeUnmount(()=> {
    window.removeEventListener('keydown', onkey);
  })
}

export default useKeydown;