<template>
  <div style="padding: 0; margin: 0;height: 100%; overflow-y: hidden;">
    <div id="nav" style="height: 32px;">
     a client
    </div>
    <!-- <div style="height: calc(100% - 4vh);"> -->
      <!-- <router-view style="width: calc(100% - 2px);height: 100%; border: 1px solid;"/> -->
    <layout style="width: 100%;height: calc(100% - 47px); border: none;">
    </layout>
    <div id="foot"></div>
    <!-- </div> -->
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Layout from '@/layout/index.vue'
export default defineComponent({
  name: 'app',
  components: {
    Layout
  }
})
</script>
<style>
html body {
  margin: 0;
  padding: 0;
  background-color: black;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  width: 100vw;
  height: 100vh;
  padding: 0;
  margin: 0;
  background-color: black;
  border: none;
}


#nav {
  padding: 0;
  -webkit-app-region: drag;
  border: none;
  background-color: rgb(62, 61, 60);
  border-bottom: #20272e 0.5px solid;
  align-content: center;
  justify-content: center;
  align-items: center;
  text-align: center;
  display: flex;
  color: rgb(126, 128, 130);
  box-shadow: 0 2px #20272e;
}

#foot {
  height: 15px;
  background-color: rgb(0, 112, 177);
}
</style>
