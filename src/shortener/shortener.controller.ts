import {
  Controller,
  Post,
  Body,
  Get,
  Param,
  NotFoundException,
  Res,
  HttpStatus,
} from '@nestjs/common';
import { ShortenerService } from './shortener.service';
import { Response } from 'express';

@Controller()
export class ShortenerController {
  constructor(private readonly shortenerService: ShortenerService) {}

  @Post('/api/v1/shortener')
  async createShortUrl(@Body('longUrl') longUrl: string, @Res() res: Response) {
    const shortUrl = await this.shortenerService.shortenUrl(longUrl);
    return res.status(201).json({
      message: 'Short URL created successfully',
      statusCode: HttpStatus.CREATED,
      data: {
        shortUrl: `${process.env.BASE_URL ?? 'http://localhost:5000'}/${shortUrl}`,
      },
    });
  }

  @Get(':shortUrl')
  async redirectToLongUrl(
    @Param('shortUrl') shortUrl: string,
    @Res() res: Response,
  ) {
    const url = await this.shortenerService.getUrlByShortLink(shortUrl);

    if (!url) {
      throw new NotFoundException('Short URL not found');
    }

    return res.redirect(HttpStatus.FOUND, url.longUrl);
  }
}
