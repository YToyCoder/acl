import { defineComponent, PropType } from "vue"

import { VolumeStatistic } from "@/types/poetry"

export default defineComponent({
  name: 'AclPoetryVolume',
  props: {
    data: Object as  PropType<VolumeStatistic>
  },
  setup(props){
    return () => (
      <div> volume </div>
    )
  }
})