import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { ResultsService } from './results.service';
import { CreateResultDto } from './dto/create-result.dto';
import { UpdateResultDto } from './dto/update-result.dto';

@Controller('results')
export class ResultsController {
  constructor(private readonly resultsService: ResultsService) {}

  @Get('evaluation')
  findEvaluation(@Param('version') version: number) {
    return this.resultsService.findEvaluation(version);
  }

  @Get('importance')
  findImportance(@Param('version') version: number) {
    return this.resultsService.findImportance(version);
  }

  @Post('memo')
  create(@Body() createResultDto: CreateResultDto) {
    return this.resultsService.createMemo(createResultDto);
  }

  @Get('memo')
  findOne(@Param('version') version: number) {
    return this.resultsService.findOneMemo(version);
  }

  @Patch('memo')
  update(
    @Param('version') version: number,
    @Body() updateResultDto: UpdateResultDto,
  ) {
    return this.resultsService.updateMemo(version, updateResultDto);
  }

  @Delete('memo')
  remove(@Param('version') version: number) {
    return this.resultsService.removeMemo(version);
  }
}
