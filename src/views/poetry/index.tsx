import { FileMeta, PoetryStatistic, PoetryTang, VolumeStatistic } from "@/types/poetry"
import BScroll, { ScrollBar, MouseWheel } from "better-scroll"
import { defineComponent, getCurrentInstance } from "vue"
import Tang from './Tang.vue'
import StyleIcon from "@/components/StyleIcon"
import headTag from "./head-tag"
import HeadTag from "./head-tag"
import { QLayout, QHeader, QBtn, QToolbar, QSpace } from 'quasar'

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
    scroll: BScroll | undefined,
    volumes: Array<VolumeStatistic> | undefined
  } {
    return {
      meta: undefined,
      poetry: undefined,
      scroll: undefined,
      volumes: undefined
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
      getPoetry().loadTangVolume()
      getPoetry().onLoadTangVolume(( _, data: Array<VolumeStatistic>) => {
        console.log(data)
        this.volumes = data
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
        <QLayout view="1Hh 1pr 1Ff">
          <QHeader elevated>
            <QToolbar>
              <QBtn icon="menu" flat round dense></QBtn>
              <QSpace></QSpace>
            </QToolbar>
          </QHeader>

        </QLayout>
      </div>
    ) 
  }
})

/**
 * <div style={({height: '35px', 'border-bottom': '1px solid black'})}>
          <div class="acl__poetry-head-tags acl__poetry-head-item">
            <HeadTag style={({width: '100%', height: '300px'})} data={this.volumes}></HeadTag>
          </div>
          <div class="acl__poetry-head-function acl__poetry-head-item" >
            <StyleIcon icon="volume" height="20px" class="acl__poetry-head-function-item" ></StyleIcon>
            <StyleIcon icon="DoubleArrowLeft" height="20px" class="acl__poetry-head-function-item" ></StyleIcon>
          </div>

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
 */