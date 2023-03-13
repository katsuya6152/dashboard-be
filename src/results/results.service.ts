import { Injectable } from '@nestjs/common';
import { PrismaMongoService } from 'src/prisma-mongo/prisma-mongo.service';
import { CreateResultDto } from './dto/create-result.dto';
import { UpdateResultDto } from './dto/update-result.dto';

@Injectable()
export class ResultsService {
  constructor(private prisma: PrismaMongoService) {}

  findEvaluation(version: number) {
    return this.prisma.confusion_matrix.findMany({ where: { version } });
  }

  findImportance(version: number) {
    return this.prisma.importance.findMany({ where: { version } });
  }

  createMemo(createResultDto: CreateResultDto) {
    return this.prisma.memo.create({ data: createResultDto });
  }

  findOneMemo(version: number) {
    return this.prisma.memo.findMany({ where: { version } });
  }

  updateMemo(version: number, updateResultDto: UpdateResultDto) {
    return this.prisma.memo.updateMany({
      where: { version },
      data: updateResultDto,
    });
  }

  removeMemo(version: number) {
    return this.prisma.memo.deleteMany({ where: { version } });
  }
}
