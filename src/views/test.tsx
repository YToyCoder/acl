import { defineComponent } from "vue"
import Scrollable from "@/components/Scrollable/index.tsx"

export default defineComponent({
  name: 'test',
  setup(props, ctx) {
    return () => (
      <div>
        <Scrollable scrollId="test-wrapper" >
          
          {(() => {
            const ls = Array.from({length: 1000}, () => 'line..>')
            const ans = []
            for(let each of ls){
              ans.push(<span>{each}</span>)
            }
            return ans
          })()}
        </Scrollable>
      </div>
    )
  }
})
