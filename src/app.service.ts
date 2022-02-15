import { Injectable } from '@nestjs/common';

import { ModelService } from './model/model.service';

@Injectable()
export class AppService {
  constructor(private getData: ModelService) {}

  async findAllResponse(): Promise<any> {
    return await this.getData.findAll();
  }

  async findOneResponse(id: string): Promise<any> {
    return await this.getData.findOne(id);
  }
}
