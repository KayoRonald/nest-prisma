import { Module } from '@nestjs/common';
import { EpiceService } from '../service/app.service';
import { EpiceController } from '../controller/epice.controller';
import { PrismaModule } from '../prisma/prisma.module';
import { EpiceUsersRepository } from '../repositories';

@Module({
  imports: [PrismaModule],
  controllers: [EpiceController],
  providers: [EpiceUsersRepository, EpiceService]
})
export class EpiceModule { }
