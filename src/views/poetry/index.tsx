import { FileMeta, PoetryStatistic, PoetryTang } from "@/types/poetry"
import BScroll, { ScrollBar, MouseWheel } from "better-scroll"
import { defineComponent, getCurrentInstance } from "vue"
import Tang from './Tang.vue'

function getPoetry() {
  return window.poetry
}

BScroll.use(ScrollBar)
BScroll.use(MouseWheel)

export default defineComponent({
  name: 'poetry',
  data: function(): { 
    meta: PoetryStatistic | undefined,
    poetry: Array<PoetryTang> | undefined,
    scroll: BScroll | undefined
  } {
    return {
      meta: undefined,
      poetry: undefined,
      scroll: undefined
    }
  },
  methods: {
    loadData() {
      getPoetry().loadData(( _ : Electron.IpcRendererEvent, data: PoetryStatistic): any => {
        this.meta = data
        getPoetry().loadTangPoetry(data.fileMetas[0].name)
      })
      getPoetry().onloadTangPoetry((_ : Electron.IpcRendererEvent, data: Array<PoetryTang>) => {
        console.log(this.scroll)
        this.poetry = data
        setTimeout(() => {
          this.scroll?.refresh()
        }, 100)
      })
    },

  },
  created() {
      this.loadData()
  },
  mounted() {
    // this.$nextTick(() => {
      this.scroll = new BScroll('.scroll-wrapper', {scrollY: true, scrollbar: true, click: true, mouseWheel: { speed: 20, invert: false, easeTime: 300}})
      const appContext = getCurrentInstance()?.appContext
      if(appContext && appContext.config) {
      }
    // })
  },
  render() {
    return (
      <div 
      style={({height: '100%'})}
      >
        <div style={({height: '25px', 'border-bottom': '1px solid black'})}>
          
          poetry
          <input />
          <button onClick={
            () => {
              getPoetry()?.loadStatisticOf('quan_tang_shi')
            }
          }>统计信息</button>
        </div>
        <div class={'scroll-wrapper'} style={({height: 'calc(100% - 25px)', overflow: 'hidden', position: 'relative'})}>
          
          <div style={ ({display: 'relative', 'flex-wrap': 'wrap', alignItems: 'center' }) } class={'scroll-content'}>
          { (() => {
            const rs = []
            if(this.poetry)
            for(let p of this.poetry) {
              rs.push(<Tang poetry={p} style={({width: 'calc(100% - 80px)', margin: '10px 10px'})}></Tang>)
            }
            return rs
          })() }
          </div>
        </div>
      </div>
    ) 
  }
})