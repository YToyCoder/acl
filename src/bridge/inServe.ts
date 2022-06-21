import { App, ipcMain } from "electron"
import { loadStatisticOf, loadTangPoetry, loadTangVolume, onLoadTangVolume } from './predefines'
import { loadStatistic, loadTangsPoetry, loadVolume } from '@/serve/load'
import { PoetryType } from "@/types/poetry"

export default function (app: App) {
  ipcMain.on(loadStatisticOf, (event, poetryType: PoetryType) => {
    const loadedData = loadStatistic(poetryType)
    console.log('invoke loadStatisticOf in main process')
    event.sender.send(loadStatisticOf ,loadedData)
  }) 

  ipcMain.on('loadTangPoetry', (event, file : string) => {
    console.log('call main loadTangPoetry')
    
    event.sender.send('onloadTangPoetry', loadTangsPoetry(file))
  })

  ipcMain.on('exitApp', () => {
    console.log('click exitApp')
    
    app.quit()
  })

  ipcMain.on(loadTangVolume, (event) => {
    console.log(`${loadTangVolume} volume.json`)
    event.sender.send(onLoadTangVolume, loadVolume("quan_tang_shi"))
  })
}
