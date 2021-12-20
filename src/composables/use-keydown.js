
import { onBeforeUnmount } from "@vue/runtime-core";

const useKeydown = (keyCombos) => {
  let onKeydown = ({ key }) => {

    const kc = keyCombos.find((k) => k.key === key);
    if (kc) {
      kc.fn();
    }
  };

  window.addEventListener("keydown", onKeydown);
  onBeforeUnmount(() => {
    window.removeEventListener("keydown", onKeydown);
  });
};

export default useKeydown;