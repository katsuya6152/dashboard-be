import { Module } from '@nestjs/common';
import { ConfusionMatrixService } from './confusion-matrix.service';
import { ConfusionMatrixController } from './confusion-matrix.controller';
import { PrismaMongoModule } from 'src/prisma-mongo/prisma-mongo.module';

@Module({
  controllers: [ConfusionMatrixController],
  providers: [ConfusionMatrixService],
  imports: [PrismaMongoModule],
})
export class ConfusionMatrixModule {}
