import { defineComponent } from "vue"
import AclButton from '@/components/button'
import AclTag from '@/components/tag'

export default defineComponent({
  name: 'test',
  setup(props, ctx) {
    return () => (
      <div style={({width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center'})}>
        {/* <AclButton>打开</AclButton> */}
        <AclTag> tag </AclTag>
      </div>
    )
  }
})
