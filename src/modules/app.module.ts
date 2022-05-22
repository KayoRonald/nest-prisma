import { Module } from '@nestjs/common';
import { AppServiceHello } from 'src/service/hello.service';
import { AppController } from '../controller/app.controller';
import { ListController } from '../controller/ListUsers/list.users.controller';
import { AppService } from '../service/app.service';

@Module({
  imports: [],
  controllers: [AppController, ListController],
  providers: [AppService, AppServiceHello],
})
export class AppModule { }
