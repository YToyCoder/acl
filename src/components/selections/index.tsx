import { defineComponent, PropType } from "vue"
import AclTag from '@/components/tag'

export default function defineSelection< T extends Record<string, any>>(prop : string) {
  return defineComponent({
    name: 'AclSelections',
    props: {
      data: {
        type: Object as PropType< Array<T>>
      },
      close: {
        type: Function as PropType<(payload: T) => void>,
      }
    },
    setup(props) {
      return () => (
        <div class={['acl__selection']}>
        {
          props.data ? 
          (() => {
            const selections = []
            for(let key in props.data) {
              const each = props.data[key]
              selections.push(<AclTag closable class={['acl__selection-tag']} 
              close={() => {
                if(props.close) props.close(each)
              }}>{each[prop]}</AclTag>)
            }
            return selections
          })() : ''
        }
        </div>
      )
    }
  })
}