import { defineComponent, renderSlot } from 'vue'

export default defineComponent({
  name: 'AclTag',
  props: {
    closable: {
      type: Boolean,
      default: false
    },
    mark: {
      type: [String, Number]
    },
    close: {
      type: Function
    }
  },
  setup(props, ctx){
    return () => (
      <div class={['acl__tag-wrapper']}>
        <div style={({display: 'inline-block'})} class="acl__tag-content">{ renderSlot(ctx.slots, 'default')}</div>
        {
          (() => (
            props.closable ? 
            <icon onClick={ () => {
              if(props.close) props.close(props.mark)
            }}
              style={({display: 'inline-block', float: 'right'})} 
              className="close" class="acl__tag-close"></icon> : 
            ''
          ))()
        }
      </div>
    )
  }
})
