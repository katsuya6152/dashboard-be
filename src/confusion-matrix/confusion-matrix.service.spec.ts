import { Test, TestingModule } from '@nestjs/testing';
import { ConfusionMatrixService } from './confusion-matrix.service';

describe('ConfusionMatrixService', () => {
  let service: ConfusionMatrixService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ConfusionMatrixService],
    }).compile();

    service = module.get<ConfusionMatrixService>(ConfusionMatrixService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
