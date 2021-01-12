<template>
  <div class="container">
    <global-header :user="userInfo"></global-header>
    <form action="">
      <div class="mb-3">
        <label for="exampleInputEmail1" class="form-label">邮箱地址</label>
        <input type="email" class="form-control" id="exampleInputEmail1" v-model="emailRef.val" @blur="validEmail">
      </div>
      <div class="form-text" v-if="emailRef.error">{{emailRef.message}}</div>
      <div class="mb-3">
        <label for="exampleInputPassword1" class="form-label">密码</label>
        <input type="password" class="form-control" id="exampleInputPassword1">
      </div>
    </form>
    <column-list :list="list"></column-list>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive } from 'vue';
import ColumnList from './components/ColumnList.vue';
import GlobalHeader from './components/GlobalHeader.vue';
import { ColumnProps, UserInfo } from '@/do';
import 'bootstrap/dist/css/bootstrap.min.css';

const userInfo: UserInfo = {
  name: '妙蛙杰尼',
  isLogin: true,
  id: 1
}

const testData: ColumnProps[] = [
  {
    id: 1,
    avatar:
      'https://cn.bing.com/th?id=OHR.SnowCraterLake_ZH-CN9218350129_1920x1080.jpg&rf=LaDigue_1920x1080.jpg&pid=hp',
    desc: '这是专栏1',
    title: 'test1rddd的专栏'
  },
  {
    id: 2,
    avatar:
      'https://cn.bing.com/th?id=OHR.Goessweinstein_ZH-CN2155531895_1920x1080.jpg&rf=LaDigue_1920x1080.jpg&pid=hp',
    desc: '这是专栏2',
    title: 'test2d的专栏'
  },
  {
    id: 3,
    desc: '这是专栏3',
    title: 'test3d的专栏'
  }
];
export default defineComponent({
  name: 'App',
  components: { ColumnList, GlobalHeader },
  setup () {
    const emailRef = reactive({
      val: '',
      error: false,
      message: ''
    });
    const validEmail = () => {
      if (emailRef.val.trim() === '') {
        emailRef.error = true;
        emailRef.message = 'can not be empty!'
      }
    }

    return {
      list: testData,
      userInfo,
      emailRef,
      validEmail
    };
  }
});
</script>

<style>
/* *{margin: 0; padding: 0;} */
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
