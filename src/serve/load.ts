import fs from 'fs'
import path from 'path'
import { PoetryStatistic, PoetryType } from "@/types/poetry"

export const poetryFolder : string= path.resolve(__dirname, '../assets/poetry')



import { Loader, ChinesePoetry } from '@/types/poetry'

export const poetryLoader : Loader = {
  load(path: string): Array<ChinesePoetry> {
    const content = fs.readFileSync(path, {encoding: 'utf8'})
    return JSON.parse(content)
  },
}

export function getStatisticFile(poetryType: PoetryType): string {
  return path.resolve(path.resolve(poetryFolder, poetryType), 'statistic.json')
}

/**
 * 通过诗词类型加载统计信息
 * @param poetryType 诗词类型
 * @returns {Array<PoetryStatistic>}
 */
export function loadStatistic(poetryType: PoetryType) {
  return poetryLoader.load(getStatisticFile(poetryType))
}