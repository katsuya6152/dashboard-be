import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './prisma/prisma.module';
import { RawModule } from './raw/raw.module';

@Module({
  imports: [PrismaModule, RawModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
