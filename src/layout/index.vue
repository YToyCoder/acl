<script lang="ts" setup>
import routes from '@/router/routes'
import { reactive, ref } from 'vue';
import { RouteRecordRaw } from 'vue-router';

const selectedRoute = ref<RouteRecordRaw | undefined>( undefined )
const selectedRouteCls : string = 'route__item-selected' 
const reaRoutes = reactive(routes)
/**
 * 用于处理路由选择
 */
function handleSelectRoute(route: RouteRecordRaw){
  if(typeof selectedRoute.value !== 'undefined' ){
    selectedRoute.value.selected = false
    selectedRoute.value.classes = [] 
  }
  route.selected = true
  route.classes.push(selectedRouteCls)
  selectedRoute.value = route
}
</script>

<template>
  <div style="width: 100%; height: 100%;" id="acl__layout">
    <div class="acl__layout-side acl__layout-item">
      <div style="height: 100%;">
        <div v-for="route in reaRoutes" style="width: 100%;" >
          <div class="acl__layout-side-item-icon-wrapper" :class="route.classes" >
            <div class="route__item">
              <router-link :to="route.path" @click="handleSelectRoute(route)">
                <icon :className="route.img" :type="route.selected ? 'highlight' : ''" class="icon__item" v-if="route.img"></icon>
                <span v-else style="font-size: 8px;">{{route.name}}</span>
              </router-link>
            </div>
          </div>
        </div>
      </div>
      <div style="width: 100%;"></div>
    </div>
    <div class="acl__layout-main acl__layout-item">
      <!-- <div style="height: 30px; background-color: red;" v-for="i in [1,2]"></div> -->
      <router-view style="width:100%; height: 100%;" class="layout__route-main"></router-view>
    </div>
  </div>
</template>

<style scoped>
.icon__item {
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

.route__item{
  position: absolute;
  overflow: auto;
  width: 90%;
  height: 90%;
  top: 0;
  left: 0;
  bottom: 0;
  margin: auto;
  right: 0;
}

.layout__route-main {
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  margin: auto;
}

.route__item-selected {
  border-left: 1px solid white;
}
</style>