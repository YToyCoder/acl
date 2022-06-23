import { defineComponent, renderSlot } from "vue"

export default defineComponent({
  name: 'acl__button',
  setup(_, {slots}){
    return () => (
      <button class={'acl__button'}>
        { renderSlot(slots, 'default') }
      </button>
    )
  }
})