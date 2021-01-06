<template>
  <ul>
    <li v-for="column in list" :key="column.id">
      <img :src="column.avatar" alt="" />
      <h5>{{ column.title }}</h5>
      <p>{{ column.desc }}</p>
      <a href="#"></a>
    </li>
  </ul>
</template>
<script lang="ts">
import { defineComponent, PropType } from 'vue';
import { ColumnProps } from '@/do';

export default defineComponent({
  name: 'ColumnList',
  props: {
    list: {
      // vue中的PropType可以将一个构造函数返回成一个类型
      type: Array as PropType<ColumnProps[]>,
      required: true
    }
  },
  setup () {
    //   props.list.
  }
});
</script>
