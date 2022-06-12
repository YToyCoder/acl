import fs from 'fs'

import { Loader, ChinesePoetry } from '@/types/poetry'

export const poetryLoader : Loader = {
  load(path: string): Array<ChinesePoetry> {
    const content = fs.readFileSync(path, {encoding: 'utf8'})
    return JSON.parse(content)
  },
}