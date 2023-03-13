import { Injectable } from '@nestjs/common';
import { PrismaMongoService } from 'src/prisma-mongo/prisma-mongo.service';

@Injectable()
export class ProcessedDataService {
  constructor(private prisma: PrismaMongoService) {}

  findTrain(version: number) {
    return this.prisma.train_data.findMany({ where: { version } });
  }

  findVal(version: number) {
    return this.prisma.val_data.findMany({ where: { version } });
  }

  findTest(version: number) {
    return this.prisma.test_data.findMany({ where: { version } });
  }
}
