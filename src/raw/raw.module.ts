import { Module } from '@nestjs/common';
import { RawService } from './raw.service';
import { RawController } from './raw.controller';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  controllers: [RawController],
  providers: [RawService],
  imports: [PrismaModule],
})
export class RawModule {}
