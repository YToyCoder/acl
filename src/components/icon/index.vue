<!-- <script lang="ts" setup> -->
<!-- import { computed, useAttrs, SetupContext } from 'vue'; -->
<!-- const props = defineProps<{className?: string}>() -->
<!-- const iconName = computed<string>(() => props.className ? `svg-icon-${props.className}` : 'svg-icon') -->
<!-- const attrs = useAttrs() -->
<!-- </script> -->
<!---->
<template>
  <svg  :class="iconStyle" :style="{width, height}">
    <use :xlink:href="iconName" class="svg-iner" ></use>
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
    },
    type: {
      type: String,
      default: ''
    },
    width: {
      type: String,
      default: '1em'
    },
    height: {
      type: String,
      default: '1em'
    }
  },
  setup(props, context) {
    const iconName = computed(() => props.className ? `#icon-${props.className}` : 'icon')
    const iconStyle = computed(() => props.type === '' ? 'acl__icon' : `acl__icon-${props.type}`)
    return {
      props,
      iconName,
      iconStyle
    }
  }
})
</script>
