import { Sample } from '@src/Domain/Sample'
import { Prisma, PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export class SampleRepository {
  async get(): Promise<Sample> {
    // 本来DBから取ったりなんだり...
    // 今回はSampleの為、割愛
    const sampleData = await prisma.Sample.findMany()
    return sampleData
  }
}
