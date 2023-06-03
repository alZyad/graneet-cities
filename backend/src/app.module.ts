import { Module } from '@nestjs/common';
import { ApiController } from './api/api.controller';
import { ApiService } from './api/api.service';
import { ApiModule } from './api/api.module';
import { HttpModule } from '@nestjs/axios';

@Module({
  imports: [ApiModule, HttpModule],
  controllers: [ApiController],
  providers: [ApiService],
})
export class AppModule {}
