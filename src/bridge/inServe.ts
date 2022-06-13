import { ipcMain } from "electron"
import { loadStatisticOf } from './predefines'
import { poetryLoader, poetryFolder, loadStatistic } from '@/serve/load'
import { PoetryType } from "@/types/poetry"
import path from 'path'

export default function () {
  ipcMain.on(loadStatisticOf, (event, poetryType: PoetryType) => {
    const loadedData = loadStatistic(poetryType)
    console.log('invoke loadStatisticOf in main process')
    event.sender.send(loadStatisticOf ,loadedData)
  }) 
}

export const preloadUrl = path.resolve(__dirname, './preload.ts')