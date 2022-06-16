import { ipcMain } from "electron"
import { loadStatisticOf, loadTangPoetry } from './predefines'
import { loadStatistic, loadTangsPoetry } from '@/serve/load'
import { PoetryType } from "@/types/poetry"

export default function () {
  ipcMain.on(loadStatisticOf, (event, poetryType: PoetryType) => {
    const loadedData = loadStatistic(poetryType)
    console.log('invoke loadStatisticOf in main process')
    event.sender.send(loadStatisticOf ,loadedData)
  }) 

  ipcMain.on('loadTangPoetry', (event, file : string) => {
    console.log('call main loadTangPoetry')
    
    event.sender.send('onloadTangPoetry', loadTangsPoetry(file))
  })
}
