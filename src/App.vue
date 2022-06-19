<template>
  <div style="padding: 0; margin: 0;height: 100%; overflow-y: hidden;">
    <div id="nav" style="height: 30px; width: 100%;">
      <div class="nav__layout">
      </div>
      <div class="nav__layout nav__item-middle">
         a client
      </div>
      <div class="nav__layout ">
        <icon className="quit" class="nav-item" style="float: right;margin-top: 8px;margin-right: 4px;-webkit-app-region: no-drag" @click="handleExitApp"></icon>
      </div>
    </div>
    <!-- <div style="height: calc(100% - 4vh);"> -->
      <!-- <router-view style="width: calc(100% - 2px);height: 100%; border: 1px solid;"/> -->
    <layout style="width: 100%;height: calc(100% - 45px);overflow: hidden; border: none;">
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
  },
  methods: {
    handleExitApp(){
      window.poetry.exitApp()
    }
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
  background-color: rgb(49, 49, 49);
  border-bottom: #20272e 0.5px solid;
  /*align-content: center;
  justify-content: center;
  align-items: center;
  display: flex; */
  color: rgb(126, 128, 130);
  box-shadow: 0 2px #20272e;
}
.nav__layout {
  width: 33%;
  display: inline-block;
}
/*
.nav-item {
  position: absolute;
  overflow: auto;
  width: 80%;
  height: 80%;
  top: 0;
  left: 0;
  bottom: 0;
  margin: auto;
  right: 0;
}
*/
#foot {
  height: 15px;
  background-color: rgb(0, 112, 177);
}
</style>
