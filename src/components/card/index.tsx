import { computed, defineComponent, renderSlot } from "vue"

const cardTypes = ['dark','']
function handleType(type: string) {
  if(cardTypes.includes(type))
    return type.length == 0 ? type : `-${type}`
  return '' 
}
export default defineComponent({
  name: 'acl__card',
  props: {
    width: {
      type: String,
      default: '100%'
    },
    height: {
      type: String,
      default: '100%'
    },
    type: { 
      // '' | dark
      type: String,
      default: '' 
    }
  },
  setup(props, {slots}){

    const type = computed(() => handleType(props.type))
    return () => (
      <div class={`acl__card-wrapper${type.value}`} style={({width: props.width, height: props.height})}>{ renderSlot(slots, 'default') }</div>
    )
  }
})