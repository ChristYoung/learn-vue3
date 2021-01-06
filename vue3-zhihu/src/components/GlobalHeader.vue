<template>
    <nav class="navbar navbar-dark bg-primary justify-content-between mb-4 px-4">
        <a class="navbar-brand" href=""></a>
        <ul v-if="!user.isLogin" class="list-inline mb-0">
            <li class="list-inline-item">
                <a href="" class="btn btn-outline-light">登录</a>
            </li>
            <li class="list-inline-item">
                <a href="" class="btn btn-outline-light">注册</a>
            </li>
        </ul>
        <ul v-else class="list-inline mb-0">
            <li class="list-inline-item">
                <a href="" class="btn btn-outline-light">你好, {{user.name}}</a>
            </li>
        </ul>
    </nav>
</template>
<style lang="stylus" scoped>

</style>
<script lang="ts">
import { computed, defineComponent, PropType } from 'vue';
import { UserInfo } from '@/do';

export default defineComponent({
    name: 'GlobalHeader',
    props: {
        user: {
            type: Object as PropType<UserInfo>,
            required: true
        }
    }
});

</script>