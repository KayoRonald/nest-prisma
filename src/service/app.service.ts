import {
  Injectable,
  InternalServerErrorException,
  BadRequestException,
  NotFoundException,
} from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { IListUser, Users } from 'src/dto';
import { EpiceUsersRepository } from '../repositories';

type UsersCreateInput = {
  id?: string;
  name: string;
  email: string;
  created_at?: string | Date;
  update_at?: string | Date;
};

@Injectable()
export class EpiceService {
  constructor(private readonly epiceUsersRepository: EpiceUsersRepository) {}

  async createUsers(input: UsersCreateInput, curso: string): Promise<Users> {
    try {
      return this.epiceUsersRepository.createUsers(input, curso);
    } catch {
      throw new BadRequestException('Ocorreu algum erro para listar');
    }
  }

  async getListUsers() {
    try {
      return this.epiceUsersRepository.findAll();
    } catch {
      throw new BadRequestException('Ocorreu algum erro para listar');
    }
  }

  async updateName(name: string, email: string): Promise<Users> {
    const foundBookById = await this.epiceUsersRepository.findByUnique({
      email,
    });
    // Case não exista, retorna erro 404
    if (!foundBookById) {
      throw new NotFoundException('Usuário não encontrado em nosso sistema :(');
    }
    try {
      // Retorna o usuário atualizado
      return this.epiceUsersRepository.updateName(name, email);
    } catch {
      throw new InternalServerErrorException();
    }
  }

  async deleteWhere(email: string): Promise<Users> {
    try {
      const delet = await this.epiceUsersRepository.delete(email);
      return delet;
    } catch {
      throw new BadRequestException(
        'Esse email não está registrado em nosso sistema!',
      );
    }
  }
}
