export type PoetryTang = {
  title: string,
  author?: string,
  biography?: string,
  paragraphs: Array<string>,
  notes?: Array<string>,
  volume: string,
  'no#': number
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

export type PoetryConfig = {
  tangUrl: string
}

export type ChinesePoetry = PoetryTang | PoetryStatistic | string

/**
 * the file loader to load the json file for specific structure
 * ex. { PoetryTang }
 */
export type Loader = {
  load(path: string): Array<ChinesePoetry>
}