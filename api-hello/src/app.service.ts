import { Injectable } from '@nestjs/common';
import { nanoid } from 'nanoid';

@Injectable()
export class AppService {
  getHello(): string {
    return process.env.HELLO_MESSAGE;
  }

  getNanoid(): string {
    return nanoid();
  }
}
