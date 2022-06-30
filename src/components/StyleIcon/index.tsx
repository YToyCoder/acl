import { defineComponent } from "vue"

export default defineComponent({
  name: 'AclStyleIcon',
  props: {
    icon: {
      type: String,
      default: ''
    },
    width: {
      type: String,
      default: '2em'
    },
    height: {
      type: String,
      default: '2em'
    }
  },
  setup(props) {
    return () => (
      <div class={['acl__style-icon-wrapper']}>
        <icon className={props.icon} width={props.width} height={props.height}></icon>
      </div>
    )
  }
})