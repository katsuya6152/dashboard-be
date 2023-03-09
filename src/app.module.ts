import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './prisma/prisma.module';
import { RawModule } from './raw/raw.module';
import { PrismaMongoModule } from './prisma-mongo/prisma-mongo.module';
import { ConfusionMatrixModule } from './confusion-matrix/confusion-matrix.module';

@Module({
  imports: [PrismaModule, RawModule, PrismaMongoModule, ConfusionMatrixModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
