import { Test, TestingModule } from '@nestjs/testing';
import { ProcessedDataController } from './processed-data.controller';
import { ProcessedDataService } from './processed-data.service';

describe('ProcessedDataController', () => {
  let controller: ProcessedDataController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ProcessedDataController],
      providers: [ProcessedDataService],
    }).compile();

    controller = module.get<ProcessedDataController>(ProcessedDataController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
