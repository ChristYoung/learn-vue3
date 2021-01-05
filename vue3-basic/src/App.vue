<template>
  <img alt="Vue logo" src="./assets/logo.png" />
  <HelloWorld msg="Welcome to Your Vue.js + TypeScript App" />
  <h1>{{ count }}</h1>
  <h3>{{ doubleCount }}</h3>
  <button type="button" @click="increase">点赞新增</button>
  <button type="button" @click="updateGreeting">更新Greeting</button>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import HelloWorld from "./components/HelloWorld.vue";
import { ref, computed, onMounted, watch } from "vue";

export default defineComponent({
  name: "App",
  // 在setUp中无法访问this
  setup() {
    const count = ref(0);
    const doubleCount = computed(() => count.value * 2);
    const greetings = ref("");
    const updateGreeting = () => {
      greetings.value += "hello";
    };
    const increase = () => {
      count.value++;
    };
    watch(greetings, (newVal, oldVal) => {
      console.log("🚀 ~ file: App.vue ~ line 29 ~ watch ~ oldVal", oldVal);
      console.log("🚀 ~ file: App.vue ~ line 29 ~ watch ~ newVal", newVal);
      document.title = greetings.value;
    });
    onMounted(() => {
      console.log("mounted");
    });
    return { count, increase, doubleCount, updateGreeting };
  },
  components: {
    HelloWorld,
  },
});
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
