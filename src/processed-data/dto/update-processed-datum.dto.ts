import { PartialType } from '@nestjs/swagger';
import { CreateProcessedDatumDto } from './create-processed-datum.dto';

export class UpdateProcessedDatumDto extends PartialType(CreateProcessedDatumDto) {}
