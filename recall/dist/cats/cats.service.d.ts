import { Cat } from './cat.interface';
export declare class CatsService {
    private readonly cats;
    create(cat: Cat): void;
    findAll(): Cat[];
}
