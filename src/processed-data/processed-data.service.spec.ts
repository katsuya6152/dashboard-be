import { Test, TestingModule } from '@nestjs/testing';
import { ProcessedDataService } from './processed-data.service';

describe('ProcessedDataService', () => {
  let service: ProcessedDataService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ProcessedDataService],
    }).compile();

    service = module.get<ProcessedDataService>(ProcessedDataService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
