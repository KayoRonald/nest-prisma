import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { Users, UsersWhereUniqueInput } from 'src/dto';
import { Prisma } from '@prisma/client';

@Injectable()
export class EpiceUsersRepository {
  constructor(private readonly prismaService: PrismaService) {}

  createUsers(input: Prisma.UsersCreateInput, curso: string) {
    return this.prismaService.users.create({
      data: {
        name: input.name,
        email: input.email,
        Courses: {
          connect: {
            name: curso,
          },
        },
      },
    });
  }

  findAll() {
    return this.prismaService.users.findMany({
      select: {
        id: true,
        name: true,
        Courses: {
          select: {
            name: true,
          },
        },
      },
    });
  }

  findByUnique(input: UsersWhereUniqueInput) {
    return this.prismaService.users.findUnique({
      where: input,
    });
  }

  findByIdCourse(name: string) {
    return this.prismaService.courses.findMany({
      where: {
        name,
      },
    });
  }

  updateName(name: string, email: string) {
    return this.prismaService.users.update({
      data: {
        name,
      },
      where: {
        email,
      },
    });
  }

  delete(email: string) {
    return this.prismaService.users.delete({
      where: {
        email,
      },
    });
  }
}
