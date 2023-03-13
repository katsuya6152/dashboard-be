import { Module } from '@nestjs/common';
import { ResultsService } from './results.service';
import { ResultsController } from './results.controller';
import { PrismaMongoModule } from 'src/prisma-mongo/prisma-mongo.module';

@Module({
  controllers: [ResultsController],
  providers: [ResultsService],
  imports: [PrismaMongoModule],
})
export class ResultsModule {}
