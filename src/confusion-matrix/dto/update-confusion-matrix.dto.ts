import { PartialType } from '@nestjs/swagger';
import { CreateConfusionMatrixDto } from './create-confusion-matrix.dto';

export class UpdateConfusionMatrixDto extends PartialType(
  CreateConfusionMatrixDto,
) {}
