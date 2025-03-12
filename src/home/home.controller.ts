import { Controller, Get, HttpStatus, Res } from '@nestjs/common';

import { Response } from 'express';

@Controller('/api/v1')
export class HomeController {
  @Get()
  getHome(@Res() res: Response) {
    return res.status(200).json({
      message: 'Welcome to the SHortener API!',
      status: 'ok',
      statusCode: HttpStatus.OK,
      data: null,
    });
  }
}
