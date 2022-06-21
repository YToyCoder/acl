export type PoetryTang = {
  title: string | undefined,
  author?: string | undefined,
  biography?: string | undefined,
  paragraphs: Array<string> | undefined,
  notes?: Array<string> | undefined,
  volume: string | undefined,
  'no#': number | undefined
}

/**
 * 单个诗词文件的统计：文件名和诗词数量
 */
export type FileMeta = {
  name: string,
  size: number
}

/**
 * 文件统计格式: 统计一种类型的诗词的总数和每个文件的诗词的数量
 */
export type PoetryStatistic = {
  total: number,
  fileMetas: Array<FileMeta>
}

export type VolumeStatistic = Array<{volume: string, files: Array<string>}>

export type PoetryConfig = {
  tangUrl: string
}

export type ChinesePoetry = PoetryTang | PoetryStatistic | string | VolumeStatistic

/**
 * the file loader to load the json file for specific structure
 * ex. { PoetryTang }
 */
export type Loader = {
  load(path: string): Array<ChinesePoetry>
}

export type PoetryType = 'quan_tang_shi'