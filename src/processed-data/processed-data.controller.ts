import { Controller, Get, Param } from '@nestjs/common';
import { ProcessedDataService } from './processed-data.service';

@Controller('processed-data')
export class ProcessedDataController {
  constructor(private readonly processedDataService: ProcessedDataService) {}

  @Get('train')
  findTrain(@Param('version') version: number) {
    return this.processedDataService.findTrain(version);
  }

  @Get('val')
  findVal(@Param('version') version: number) {
    return this.processedDataService.findVal(version);
  }

  @Get('test')
  findTest(@Param('version') version: number) {
    return this.processedDataService.findTest(version);
  }
}
