import { defineComponent, renderSlot, SetupContext } from 'vue'
import BScroll, { Options } from 'better-scroll'
export var config : Options = { 
  scrollbar: true, 
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
      setInterval(() => {
        this.bscroll?.refresh()
      }, 200)
    },
    createScroll() {
      this.bscroll = new BScroll(this.$props.scrollId, config)
    }
  },
  mounted() {
    this.createScroll()
  },
  props: {
    scrollId: {
      type: String,
      required: true
    }
  },
  setup(props, { slots } : SetupContext) {
    return () => (
      <div id={props.scrollId}>
        <div class={'scroll-content'}>{
          renderSlot(slots, 'default')
        }</div>
      </div>
    )
  }
})