<!-- <script lang="ts" setup> -->
<!-- import { computed, useAttrs, SetupContext } from 'vue'; -->
<!-- const props = defineProps<{className?: string}>() -->
<!-- const iconName = computed<string>(() => props.className ? `svg-icon-${props.className}` : 'svg-icon') -->
<!-- const attrs = useAttrs() -->
<!-- </script> -->
<!---->
<template>
  <svg  :class="iconStyle">
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
    },
    type: {
      type: String,
      default: ''
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

<style scoped>
.svg-icon {
  width: 1em;
  height:  1em;
  vertical-align: -0.15em;
  overflow: hidden;
  fill:currentColor;
  color: rgb(163, 164, 164);
}

.svg-icon:hover {
  fill: currentColor;
  color: rgb(232, 232, 232);
}

</style>