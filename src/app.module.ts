import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './prisma/prisma.module';
import { RawModule } from './raw/raw.module';
import { PrismaMongoModule } from './prisma-mongo/prisma-mongo.module';
import { ResultsModule } from './results/results.module';
import { ProcessedDataModule } from './processed-data/processed-data.module';

@Module({
  imports: [PrismaModule, RawModule, PrismaMongoModule, ResultsModule, ProcessedDataModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
