import { Injectable } from '@angular/core';
import { NameService } from '../Name.service.def';

@Injectable()
export class NameMemoryService implements NameService {
    getName(): string {
        return 'Fernando'
    }
}