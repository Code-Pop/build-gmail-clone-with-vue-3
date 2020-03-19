import { onMounted, onBeforeUnmount } from 'vue';
import { fr } from 'date-fns/locale';

export const useKeydown = function(keyCombos) {
  let onkey = function(event) {
    let kc = keyCombos.find(({key, fn}) => key == event.key )
    if(kc) {
      kc.fn()
    }
  }

  onMounted(()=> {
    window.addEventListener('keydown', onkey);
  })
  onBeforeUnmount(()=> {
    window.removeEventListener('keydown', onkey);
  })
}

export default useKeydown;