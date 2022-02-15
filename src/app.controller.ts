import { Controller, Get, Param } from '@nestjs/common';
import { AppService } from './app.service';

@Controller('slack/response')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  async findAllResponse(): Promise<any> {
    return await this.appService.findAllResponse();
  }

  @Get(':id')
  async findOneResponse(@Param('id') id: string): Promise<any> {
    return await this.appService.findOneResponse(id);
  }
}
