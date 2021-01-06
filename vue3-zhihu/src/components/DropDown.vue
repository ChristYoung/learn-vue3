<template>
    <div class="dropdown">
        <a href="#" class="btn btn-outline-light my-2 dropdown-toggle">{{title}}</a>
        <ul class="dropdown-menu">
            <li class="dorpdown-item">
                <a href="">新建文章</a>
            </li>
            <li class="dorpdown-item">
                <a href="">编辑资料</a>
            </li>
        </ul>
    </div>
</template>
<style lang="stylus" scoped>

</style>
<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'DropDown',
  props: {
    title: {
      type: String
    }
  }
});

</script>
