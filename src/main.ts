import { NestFactory } from '@nestjs/core';
import { EpiceModule } from './modules/app.module';

async function bootstrap() {
  const app = await NestFactory.create(EpiceModule);
  await app.listen(3333,()=>{
    console.log('Rodando na porta 3333')
  })
}
bootstrap();
