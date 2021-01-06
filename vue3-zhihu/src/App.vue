<template>
  <div class="container">
    <global-header :user="userInfo"></global-header>
    <column-list :list="list"></column-list>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
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
    return {
      list: testData,
      userInfo
    };
  }
});
</script>

<style>
*{margin: 0; padding: 0;}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
