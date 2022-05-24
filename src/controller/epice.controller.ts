import {
  Controller,
  Get,
  Res,
  Delete,
  Put,
  Post,
  Param,
  Body,
} from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { Response } from 'express';
import { EpiceService } from 'src/service/app.service';

@Controller()
export class EpiceController {
  constructor(private readonly EpiceService: EpiceService) {}
  @Get('epice')
  async list() {
    return this.EpiceService.getListUsers();
  }

  @Post('epice/:curso')
  async createUsers(
    @Res() response: Response,
    @Param() params,
    @Body() input: Prisma.UsersCreateInput,
  ) {
    console.log(input);
    await this.EpiceService.createUsers(input, params.curso);
    return response.status(201).json({
      message: 'Cadastro feito com sucesso!',
    });
  }

  @Put('epice/:email')
  async updateName(
    @Res() response: Response,
    @Param() params,
    @Body('name') name: string,
  ) {
    await this.EpiceService.updateName(name, params.email);
    return response.status(201).json({
      message: 'Nome atualizado com sucesso!',
    });
  }

  @Delete('epice/:email')
  async deleteWhere(@Res() response: Response, @Param() params) {
    await this.EpiceService.deleteWhere(params.email);
    return response.status(201).json({
      message: 'Deletado com sucesso!',
    });
  }
}
