import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Url } from './entities/url.entity';
import * as crypto from 'crypto';

@Injectable()
export class ShortenerService {
  constructor(
    @InjectRepository(Url)
    private urlRepository: Repository<Url>,
  ) {}

  async shortenUrl(longUrl: string): Promise<string> {
    let existingUrl = await this.urlRepository.findOne({ where: { longUrl } });

    if (existingUrl) {
      return existingUrl.shortUrl;
    }

    let shortUrl: string | undefined;
    let isUnique = false;

    while (!isUnique) {
      shortUrl = crypto.randomBytes(3).toString('hex');
      const existingShort = await this.urlRepository.findOne({
        where: { shortUrl },
      });

      if (!existingShort) {
        isUnique = true;
      }
    }

    const newUrl = this.urlRepository.create({ longUrl, shortUrl });
    await this.urlRepository.save(newUrl);

    return shortUrl!;
  }

  // Retrieve the original long URL from the short URL
  async getUrlByShortLink(shortUrl: string): Promise<Url | null> {
    return this.urlRepository.findOne({ where: { shortUrl } });
  }
}
