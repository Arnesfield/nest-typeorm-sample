/* eslint-disable @typescript-eslint/no-empty-function */
import { Controller, Get, Redirect, HttpStatus } from '@nestjs/common';

@Controller()
export class AppController {
  @Get()
  @Redirect('world', HttpStatus.TEMPORARY_REDIRECT)
  getHello() {}
}
