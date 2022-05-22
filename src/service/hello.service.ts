import { Injectable } from '@nestjs/common';

@Injectable()
export class AppServiceHello {
  getHello(): string {
    return 'Olá mundo!';
  }
}
