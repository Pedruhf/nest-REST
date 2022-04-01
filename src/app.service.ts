import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Para po é o pai do docker é hahahahah!';
  }
}
