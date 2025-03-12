import { Module } from '@nestjs/common';
import { ShortenerController } from './shortener.controller';
import { ShortenerService } from './shortener.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Url } from './entities/url.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Url])],
  controllers: [ShortenerController],
  providers: [ShortenerService],
})
export class ShortenerModule {}
