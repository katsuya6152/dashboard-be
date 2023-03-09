import { Test, TestingModule } from '@nestjs/testing';
import { ConfusionMatrixController } from './confusion-matrix.controller';
import { ConfusionMatrixService } from './confusion-matrix.service';

describe('ConfusionMatrixController', () => {
  let controller: ConfusionMatrixController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ConfusionMatrixController],
      providers: [ConfusionMatrixService],
    }).compile();

    controller = module.get<ConfusionMatrixController>(ConfusionMatrixController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
