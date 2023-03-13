import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './prisma/prisma.module';
import { RawModule } from './raw/raw.module';
import { PrismaMongoModule } from './prisma-mongo/prisma-mongo.module';
import { ResultsModule } from './results/results.module';

@Module({
  imports: [PrismaModule, RawModule, PrismaMongoModule, ResultsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
