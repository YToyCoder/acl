import fs from 'fs'
import path from 'path'
import { poetryLoader } from '@/serve/load'

const poetryPath: String = path.resolve(__dirname, '../../src/assets/poetry/quan_tang_shi/json/')

describe('load json', () => {
  it('100.json', () => {
    const content = fs.readFileSync(`${poetryPath}/001.json`, {encoding: 'utf8' })
  })

  it('100.json', () => {
    const content = poetryLoader.load(`${poetryPath}/001.json`)
    console.log(content)
  })
})