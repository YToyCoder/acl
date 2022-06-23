import { defineComponent } from "vue"
import Card from "@/components/card"

export default defineComponent({
  name: 'test',
  setup(props, ctx) {
    return () => (
      <div style={({width: '100%', height: '100%'})}>
        <Card width="100px" height="200px" style="margin: 10px 10px;" type="dark">
        </Card>
      </div>
    )
  }
})
