import { loadStatisticOf, loadTangPoetry } from '@/bridge/predefines'
import BScroll from 'better-scroll';
import { PoetryType, PoetryStatistic } from './poetry';

export interface IElectronAPI {
  [loadStatisticOf]: (poetryType: PoetryType) => Promise<any>,
  loadData: (callback: (event: Electron.IpcRendererEvent, data: PoetryStatistic) => any) => any,
  loadTangPoetry: (file: string) => Promise<any>,
  onloadTangPoetry: (callback: (even: Electron.IpcRendererEvent, ...arg: any[]) => void) => any,
  exitApp: () => Promise<any>
}

declare global {
  interface Window {
    poetry: IElectronAPI;
  }
}