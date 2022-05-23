import { Injectable, InternalServerErrorException, BadRequestException, NotFoundException } from '@nestjs/common';
import { Users } from '@prisma/client';
import { IListUser } from 'src/dto';
import { EpiceUsersRepository } from '../repositories';

@Injectable()
export class EpiceService {
  constructor(private readonly epiceUsersRepository: EpiceUsersRepository) { }
  
  async getListUsers(): Promise<IListUser[]> {
    try {
      return this.epiceUsersRepository.findAll()
    } catch {
      throw new BadRequestException('Ocorreu algum erro para listar');
    }
  }

  async updateName(name: string, email: string): Promise<Users> {
    const foundBookById = await this.epiceUsersRepository.findByUnique({
      email,
    })
    // Case não exista, retorna erro 404
    if (!foundBookById)
      throw new NotFoundException('Usuário não encontrado pelo id');
    try {
      // Retorna o usuário atualizado
      return this.epiceUsersRepository.updateName(name, email);
    } catch {
      throw new InternalServerErrorException();
    }
  }

  async deleteWhere(email: string): Promise<Users> {
    try {
      const delet = await this.epiceUsersRepository.delete(email)
      return delet
    } catch {
      throw new BadRequestException('Esse email não está registrado em nosso sistema!');
    }
  }
}