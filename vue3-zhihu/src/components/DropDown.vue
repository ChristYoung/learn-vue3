<template>
  <div class="dropdown" ref="dropDownRef" @click="toggleOpen">
    <a
      href="#"
      class="btn btn-outline-light my-2 dropdown-toggle"
      >{{ title }}</a
    >
    <ul class="dropdown-menu" :style="{ display: 'block' }" v-if="isOPen">
      <slot></slot>
    </ul>
  </div>
</template>
<style lang="stylus" scoped></style>
<script lang="ts">
import { defineComponent, ref, watch } from 'vue';
import useClickOutSide from '@/hooks/useClickOutSide';

export default defineComponent({
  name: 'DropDown',
  props: {
    title: {
      type: String
    }
  },
  setup() {
    const isOPen = ref(false);
    const toggleOpen = () => {
      isOPen.value = !isOPen.value;
    };
    const dropDownRef = ref<null | HTMLElement>(null);
    const isClickOutSide = useClickOutSide(dropDownRef);

    // 监听isClickOutSide的变化
    watch(isClickOutSide, () => {
      console.log('isopen', isOPen.value);
      console.log('isclickoutside', isClickOutSide.value);
      if (isOPen.value && isClickOutSide.value) {
        isOPen.value = false;
      }
    });
    return { isOPen, toggleOpen, dropDownRef };
  }
});
</script>
