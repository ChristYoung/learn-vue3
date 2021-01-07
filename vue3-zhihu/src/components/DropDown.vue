<template>
    <div class="dropdown" ref="dropDownRef">
        <a href="#" class="btn btn-outline-light my-2 dropdown-toggle" @click.prevent="toggleOpen">{{title}}</a>
        <ul class="dropdown-menu" :style="{display: 'block'}" v-if="isOPen">
            <slot></slot>
        </ul>
    </div>
</template>
<style lang="stylus" scoped>

</style>
<script lang="ts">
import { defineComponent, ref, onMounted, onUnmounted } from 'vue';

export default defineComponent({
  name: 'DropDown',
  props: {
    title: {
      type: String
    }
  },
  setup () {
    const isOPen = ref(false);
    const toggleOpen = () => {
      isOPen.value = !isOPen.value;
    };
    const dropDownRef = ref(null);
    const dropDownClickHandler = (e: MouseEvent) => {

    };
    onUnmounted(() => {
      document.addEventListener('click', dropDownClickHandler)
    });
    onUnmounted(() => {
      document.removeEventListener('click');
    });
    return { isOPen, toggleOpen, dropDownRef };
  }
});

</script>
