<template>
  <li
    class="dropdown_option"
    :class="{'is_disabled': disabled}"
  >
    <slot></slot>
  </li>
</template>
<style>
.dropdown_option.is_disabled * {
  color: #6c757d;
  pointer-events: none;
  background-color: transparent;
}
</style>
<script lang="ts">
import { defineComponent } from 'vue';
export default defineComponent({
  name: 'DropDownItem',
  props: {
    disabled: {
      type: Boolean,
      default: false
    }
  }
});
</script>
