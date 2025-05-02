import { Sample } from '@src/Domain/Sample'

export class SampleRepository {
  async get(): Promise<Sample> {
    // 本来DBから取ったりなんだり...
    // 今回はSampleの為、割愛
    const obj = new Sample()
    obj.id = 1000
    obj.name = 'hoge'
    return obj
  }
}
