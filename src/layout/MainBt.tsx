import { defineComponent, PropType, SetupContext, renderSlot } from "vue";
import './MainBt.scss'

export default defineComponent({
  name: 'MainBt',
  props: {
    type: {
      type: Object as PropType<string>,
      default: ''
    }
  },
  setup(props, { slots }: SetupContext){
    return () => (
      <div class={`acl__main-bt${props.type}`}>
        { renderSlot(slots, 'default') }
      </div>
    )
  }
})