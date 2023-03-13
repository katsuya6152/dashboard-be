import { ApiProperty } from '@nestjs/swagger';

export class CreateResultDto {
  @ApiProperty()
  memo: string;

  @ApiProperty()
  create: string;

  @ApiProperty()
  version: number;
}
