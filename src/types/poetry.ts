export type PoetryTang = {
  title: string,
  author?: string,
  biography?: string,
  paragraphs: Array<string>,
  notes?: Array<string>,
  volume: string,
  'no#': number
}

export type PoetryConfig = {
  tangUrl: string
}

export type ChinesePoetry = PoetryTang | string

/**
 * the file loader to load the json file for specific structure
 * ex. { PoetryTang }
 */
export type Loader = {
  load(path: string): Array<ChinesePoetry>
}