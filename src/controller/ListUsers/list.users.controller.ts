import { Controller, Get } from '@nestjs/common';
import { AppServiceHello } from '../../service/hello.service';

@Controller('cats')
export class ListController {
  constructor(private readonly appService: AppServiceHello) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}