import { Sample } from '@src/Domain/Sample'
import { SampleRepository } from '@src/Infrastructure/Repository/SampleRepository'

export class SampleService {
  async get(): Promise<Sample> {
    const repo = new SampleRepository()
    return repo.get()
  }
}
