import { Controller, Get } from '@nestjs/common';
import { ConfusionMatrixService } from './confusion-matrix.service';

@Controller('confusion-matrix')
export class ConfusionMatrixController {
  constructor(
    private readonly confusionMatrixService: ConfusionMatrixService,
  ) {}

  @Get()
  find() {
    return this.confusionMatrixService.find();
  }
}
