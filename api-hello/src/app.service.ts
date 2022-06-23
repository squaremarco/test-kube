import { Injectable } from '@nestjs/common';
import { v4 as guid } from 'uuid';

@Injectable()
export class AppService {
  getHello(): string {
    return process.env.HELLO_MESSAGE;
  }

  getGuid(): string {
    return guid();
  }
}
