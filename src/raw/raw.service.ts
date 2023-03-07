import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class RawService {
  constructor(private prisma: PrismaService) {}

  findAll() {
    return this.prisma.races.findMany();
  }

  findPage(page: number) {
    return this.prisma.races.findMany({
      skip: page * 20,
      take: 20,
      orderBy: {
        id: 'desc',
      },
    });
  }
}
