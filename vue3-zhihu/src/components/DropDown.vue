<template>
    <div class="dropdown">
        <a href="#" class="btn btn-outline-light my-2 dropdown-toggle" @click.prevent="toggleOpen">{{title}}</a>
        <ul class="dropdown-menu" :style="{display: 'block'}" v-if="isOPen">
            <slot></slot>
        </ul>
    </div>
</template>
<style lang="stylus" scoped>

</style>
<script lang="ts">
import { defineComponent, ref } from 'vue';

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
    return { isOPen, toggleOpen };
  }
});

</script>
