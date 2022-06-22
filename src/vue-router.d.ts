import { _RouteRecordBase } from "vue-router"

declare module 'vue-router' {
  interface _RouteRecordBase {
    img?: any,
    classes: Array<string>, 
    selected?: boolean // 判断route是否是当前选择的 
  }
}