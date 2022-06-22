import { defineComponent, renderSlot, SetupContext } from 'vue'
import BScroll, { Options } from 'better-scroll'
export var config : Options = { 
  scrollbar: true, 
  scrollX: true,
  scrollY: true,
  click: true,
  mouseWheel: {
    speed: 20, 
    invert: false, 
    easeTime: 300
  }
}

export default defineComponent({
  name: "AclScrallable",
  data(): { 
    bscroll: BScroll | undefined 
  }{
    return {
      bscroll: undefined
    }
  },
  methods: {
    refresh(){
      setTimeout(() => {
        this.bscroll?.refresh()
        console.log(this)
      }, 200)
    },
    createScroll() {
      this.bscroll = new BScroll(`.${this.$props.scrollId}`, config)
    }
  },
  mounted() {
    this.createScroll()
    this.refresh()
  },
  props: {
    scrollId: {
      type: String,
      required: true
    }
  },
  setup(props, { slots } : SetupContext) {
    return () => (
      <div style="overflow: hidden; height: 100%; width: 100%">
        <div class={[props.scrollId, 'acl__scroll-wrapper']} >
          <div class={'scroll-content'}>{
            renderSlot(slots, 'default')
          }</div>
        </div>
      </div>
    )
  }
})