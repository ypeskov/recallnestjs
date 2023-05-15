import { Injectable } from '@nestjs/common';
import { Cat } from './interfaces/cat.interface';

let catInitial: Cat = {
  name: 'Buba',
  age: 13,
  breed: 'dvor'
}

@Injectable()
export class CatsService {
  private readonly cats: Cat[] = [catInitial, catInitial];

  create(cat: Cat) {
    this.cats.push(cat);
  }

  findAll(): Cat[] {
    return this.cats;
  }
}
