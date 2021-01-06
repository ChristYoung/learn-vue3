<template>
  <div class="row">
    <div v-for="column in columnList" :key="column.id" class="col-3">
      <div class="card h-100 shadow-sm">
        <div class="card-body text-center">
          <img :src="column.avatar" alt="" />
          <h5>{{ column.title }}</h5>
          <p>{{ column.desc }}</p>
          <button type="button" class="btn btn-outline-primary">
            进入专栏
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
img {
  max-width: 100%;
}
</style>
<script lang="ts">
import { computed, defineComponent, PropType } from 'vue';
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
  setup(props) {
    // 设置默认图片
    const columnList = computed(() =>
      props.list.map(p => {
        p.avatar = p?.avatar ? p?.avatar : require('@/assets/logo.png');
        return p;
      })
    );
    return { columnList };
  }
});
</script>
