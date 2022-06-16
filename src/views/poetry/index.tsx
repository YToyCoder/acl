import { FileMeta, PoetryStatistic, PoetryTang } from "@/types/poetry"
import { defineComponent } from "vue"
import Tang from './Tang.vue'

function getPoetry() {
  return window.poetry
}


export default defineComponent({
  name: 'poetry',
  data: function(): { 
    meta: PoetryStatistic | undefined,
    poetry: Array<PoetryTang> | undefined
  } {
    return {
      meta: undefined,
      poetry: undefined
    }
  },
  methods: {
    loadData() {
      getPoetry().loadData(( _ : Electron.IpcRendererEvent, data: PoetryStatistic): any => {
        this.meta = data
        getPoetry().loadTangPoetry(data.fileMetas[0].name)
      })
      getPoetry().onloadTangPoetry((_ : Electron.IpcRendererEvent, data: Array<PoetryTang>) => {
        this.poetry = data
      })
    },

  },
  created() {
      this.loadData()
  },
  render() {
    return (
      <div style={({overflow: 'auto'})}>
        poetry
        <input />
        <button onClick={
          () => {
            getPoetry()?.loadStatisticOf('quan_tang_shi')
          }
        }>统计信息</button>
        <div style={ ({display: 'flex', 'flex-wrap': 'wrap' })}>
        { (() => {
          const rs = []
          if(this.poetry)
          for(let p of this.poetry) {
            rs.push(<Tang poetry={p} style={({width: '200px', margin: '10px 10px'})}></Tang>)
          }
          return rs
        })() }
        </div>
      </div>
    ) 
  }
})