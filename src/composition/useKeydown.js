import { onMounted, onBeforeUnmount } from 'vue';

export const useKeydown = function(keyCombos) {
  keyCombos.forEach(({key, fn}) => {
    let onkey = function(event) {
      if(event.key == key) {
        fn()
      }
    }

    onMounted(()=> {
      window.addEventListener('keydown', onkey);
    })
    onBeforeUnmount(()=> {
      window.removeEventListener('keydown', onkey);
    })
  })
}

export default useKeydown;