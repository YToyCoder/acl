import { contextBridge , ipcRenderer } from 'electron'
import { loadStatisticOf } from './predefines'
import { PoetryType } from '@/types/poetry'

console.log('load preload')

contextBridge.exposeInMainWorld('poetry', {
  [loadStatisticOf]: function(poetryType: PoetryType) {
    ipcRenderer.send(loadStatisticOf, poetryType)
  },
  [`on${loadStatisticOf}`]: function(callback: (event: Electron.IpcRendererEvent, ...args: any[]) => void) {
    ipcRenderer.on(loadStatisticOf, callback)
  }
})
