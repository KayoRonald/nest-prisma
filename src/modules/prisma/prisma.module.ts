import { Module, Global } from '@nestjs/common'

import { PrismaService } from '../../service/prisma/prisma.service'

@Global()
@Module({
  providers: [PrismaService],
  exports: [PrismaService]
})
export class PrismaModule {}