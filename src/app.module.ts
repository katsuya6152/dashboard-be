import { Module, NestModule, MiddlewareConsumer } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './prisma/prisma.module';
import { RawModule } from './raw/raw.module';
import { PrismaMongoModule } from './prisma-mongo/prisma-mongo.module';
import { ResultsModule } from './results/results.module';
import { ProcessedDataModule } from './processed-data/processed-data.module';
import { CorsMiddleware } from './common/middleware/cors/cors.middleware';

@Module({
  imports: [
    PrismaModule,
    RawModule,
    PrismaMongoModule,
    ResultsModule,
    ProcessedDataModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(CorsMiddleware).forRoutes('*');
  }
}
