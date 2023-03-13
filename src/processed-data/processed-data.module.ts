import { Module } from '@nestjs/common';
import { ProcessedDataService } from './processed-data.service';
import { ProcessedDataController } from './processed-data.controller';
import { PrismaMongoModule } from 'src/prisma-mongo/prisma-mongo.module';

@Module({
  controllers: [ProcessedDataController],
  providers: [ProcessedDataService],
  imports: [PrismaMongoModule],
})
export class ProcessedDataModule {}
