import { Model } from 'mongoose';
import { HttpException, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';

import { UserResponseDocument } from './schemas/user-response.schema';

@Injectable()
export class ModelService {
  constructor(
    @InjectModel('UserResponse')
    private responseModel: Model<UserResponseDocument>,
  ) {}

  async findAll(): Promise<any> {
    try {
      return this.responseModel.find({}).exec();
    } catch (e) {
      throw new HttpException('Server Error.', 500);
    }
  }

  async findOne(id: string): Promise<any> {
    try {
      return this.responseModel.findOne({ slack_user_id: id }).exec();
    } catch (e) {
      throw new HttpException('Server Error.', 500);
    }
  }
}
