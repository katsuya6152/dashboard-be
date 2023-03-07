import { Controller, Get, Param } from '@nestjs/common';
import { RawService } from './raw.service';

@Controller('raw')
export class RawController {
  constructor(private readonly rawService: RawService) {}

  @Get()
  findAll() {
    return this.rawService.findAll();
  }

  @Get(':page')
  findOne(@Param('page') page: number) {
    return this.rawService.findPage(page);
  }
}
