import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello Class Programming web 2023';
  }

  getAll(): string[] {
    return ['zapatos', 'Zapato Deportivo'];
  }
}
