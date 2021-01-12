import { ref, onMounted, onUnmounted, Ref } from 'vue';

// 判断鼠标是否点击了外部的hooks
// 相当于Angular中的指令
const useClickOutSide = (eleRef: Ref<null | HTMLElement>) => {
  const isClickOutSide = ref(false);
  const dropDownClickHandler = (e: MouseEvent) => {
    if (eleRef.value) {
      if (
        eleRef.value.contains(e.target as HTMLElement) &&
        isClickOutSide.value
      ) {
        isClickOutSide.value = false;
      } else {
        isClickOutSide.value = true;
      }
    }
  };
  onMounted(() => {
    document.addEventListener('click', dropDownClickHandler);
  });
  onUnmounted(() => {
    document.removeEventListener('click', dropDownClickHandler);
  });
  return isClickOutSide;
};

export default useClickOutSide;
