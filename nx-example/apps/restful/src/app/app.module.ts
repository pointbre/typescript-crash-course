import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';

import { JournalsModule } from '@nx-example/journals';

@Module({
  imports: [JournalsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
