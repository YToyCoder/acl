import { loadStatisticOf } from '@/bridge/predefines'
import { PoetryType } from './poetry';
export interface IElectronAPI {
  [loadStatisticOf]: (poetryType: PoetryType) => Promise<void>
}

declare global {
  interface Window {
    poetry: IElectronAPI;
  }
}