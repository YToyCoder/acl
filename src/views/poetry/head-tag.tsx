import { VolumeStatistic } from "@/types/poetry"
import { defineComponent, PropType } from "vue"
import AclScrallable from '@/components/Scrollable'

export default defineComponent({
  name: 'AclPoetryHeadTag',
  props: {
    data: {
      type: Object as PropType<Array<VolumeStatistic>>
    }
  },
  watch: {
    data(val){
    }
  },
  data(): {
  }{
    return {
    }
  },
  methods: {
  },
  setup(props, ctx){
    return () => (
      <div style={({width: '100%'})}>
        <AclScrallable scrollId="acl--poetry-head-tag" style={{width: '100%'}}>
        </AclScrallable>
      </div>
    )
  }
})