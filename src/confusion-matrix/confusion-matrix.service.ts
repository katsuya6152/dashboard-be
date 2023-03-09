import { Injectable } from '@nestjs/common';
import { PrismaMongoService } from 'src/prisma-mongo/prisma-mongo.service';

@Injectable()
export class ConfusionMatrixService {
  constructor(private prisma: PrismaMongoService) {}

  find() {
    return this.prisma.confusion_matrix.findFirst();
  }
}
