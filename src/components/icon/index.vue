<!-- <script lang="ts" setup> -->
<!-- import { computed, useAttrs, SetupContext } from 'vue'; -->
<!-- const props = defineProps<{className?: string}>() -->
<!-- const iconName = computed<string>(() => props.className ? `svg-icon-${props.className}` : 'svg-icon') -->
<!-- const attrs = useAttrs() -->
<!-- </script> -->
<!---->
<template>
  <svg  class="svg-icon">
    <use :xlink:href="iconName" class="svg-iner"></use>
  </svg>
</template>

<script lang="ts" >
import { defineComponent, computed } from "vue"
export default defineComponent({
  name: 'Icon',
  props: {
    className: {
      type: String,
      default: ''
    }
  },
  setup(props, context) {
    const iconName = computed(() => props.className ? `#icon-${props.className}` : 'icon')
    return {
      props,
      iconName
    }
  }
})
</script>

<style scoped>
.svg-icon {
  width: 1em;
  height:  1em;
  vertical-align: -0.15em;
  overflow: hidden;
}

</style>