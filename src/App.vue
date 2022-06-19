<template>
  <div style="padding: 0; margin: 0;height: 100%; overflow-y: hidden;">
    <div id="acl__head" style="height: 30px; width: 100%;overflow: hidden;">
      <div class="nav__layout acl__head-item">
      </div>
      <div class="acl__head-item">
        <div class="acl__head-item-content">
           a client
        </div>
      </div>
      <div class="acl__head-item">
        <main-bt type="danger" class="acl__head-item-content"  style="float: right;-webkit-app-region: no-drag" @click="handleExitApp">
          <icon className="quit" class="acl__head-item-content-wrapper"></icon>
        </main-bt>
      </div>
    </div>
    <!-- <div style="height: calc(100% - 4vh);"> -->
      <!-- <router-view style="width: calc(100% - 2px);height: 100%; border: 1px solid;"/> -->
    <layout class="acl__layout-wrapper" 
    style="width: 100%;height: calc(100% - 45px);overflow: hidden; border: none;">
    </layout>
    <div id="acl__foot"></div>
    <!-- </div> -->
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Layout from '@/layout/index.vue'
import MainBt from "@/layout/MainBt";
export default defineComponent({
  name: 'app',
  components: {
    Layout,
    MainBt
  },
  methods: {
    handleExitApp(){
      window.poetry.exitApp()
    }
  },
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

.nav-item {
  width: 20px;
  height: 100%;
  position: relative;
  overflow: hidden;
}

#foot {
  height: 15px;
  background-color: rgb(0, 112, 177);
}
</style>
