import { contextBridge , ipcRenderer } from 'electron'
import { loadStatisticOf, loadTangPoetry } from './predefines'
import { PoetryType } from '@/types/poetry'
import { loadTangsPoetry } from '@/serve/load'

console.log('load preload')

contextBridge.exposeInMainWorld('poetry', {
  [loadStatisticOf]: function(poetryType: PoetryType) {
    ipcRenderer.send(loadStatisticOf, poetryType)
  },
  loadData: function(callback: (event: Electron.IpcRendererEvent, ...args: any[]) => void) {
    ipcRenderer.on(loadStatisticOf, callback)
  },

  loadTangPoetry: function(file: string) {
    ipcRenderer.send('loadTangPoetry', file)
  },

  onloadTangPoetry: function(callback: (even: Electron.IpcRendererEvent, ...arg: any[]) => void) {
    ipcRenderer.on('onloadTangPoetry', callback)
  }
})
