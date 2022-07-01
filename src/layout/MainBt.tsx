import { defineComponent, PropType, SetupContext, renderSlot, StyleHTMLAttributes } from "vue";
import './MainBt.scss'

export default defineComponent({
  name: 'MainBt',
  props: {
    type: {
      type: String ,
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