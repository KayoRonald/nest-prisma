import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class EpiceUsersRepository {
  constructor(private readonly prismaService: PrismaService) { }
  findAll() {
    return this.prismaService.users.findMany({
      select: {
        id: true,
        name: true,
        Courses: {
          select: {
            name: true
          }
        }
      }
    })
  }

  findByUnique(input: Prisma.UsersWhereUniqueInput) {
    return this.prismaService.users.findUnique({
      where: input,
    })
  }
  updateName(name: string, email: string) {
    return this.prismaService.users.update({
      data: {
        name
      },
      where: {
        email,
      },
    })
  }

  delete(email: string) {
    return this.prismaService.users.delete({
      where:{
        email
      }
    })
  }
}