import { Controller, Get, Res } from '@nestjs/common';
import { Response } from 'express'
import { EpiceService } from 'src/service/app.service';

@Controller()
export class EpiceController {
  constructor(private readonly EpiceService: EpiceService) { }
  @Get('epice')
  async list() {
    return this.EpiceService.getListUsers()
  }

  @Get('updateName')
  async updateName(@Res() response: Response) {
    var name = 'jão Paulo Silva'
    var email = 'joaopaulo@gmail.com'
    await this.EpiceService.updateName(name, email)
    return response.status(201).json({
      message: 'Nome atualizado com sucesso!'
    })
  }
  
  @Get('delete')
  async deleteWhere(@Res() response: Response) {
    var email = 'kayoronald@gmail.com'
    await this.EpiceService.deleteWhere(email)
    return response.status(201).json({
      message: 'Deletado com sucesso!'
    })
  }
}
