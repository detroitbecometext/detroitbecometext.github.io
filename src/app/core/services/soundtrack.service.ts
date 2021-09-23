import { Injectable } from '@angular/core';
import { Soundtrack } from '../models/soundtrack';
import { BaseDataService } from './base-data-service';

@Injectable({
    providedIn: 'root',
})
export class SoundtrackService extends BaseDataService<Soundtrack> {
    constructor() {
        super();
        let count = 13;
        for (let i = 0; i < count; i++) {
            this.items.push(new Soundtrack(i + 1));
        }
    }
}
