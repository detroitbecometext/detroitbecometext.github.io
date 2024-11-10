import { Injectable } from '@angular/core';
import { BaseDataService } from './base-data-service';
import { Soundtrack } from '../models/soundtrack';

@Injectable({
	providedIn: 'root',
})
export class SoundtrackService extends BaseDataService<Soundtrack> {
	constructor() {
		super();

		const count = 13;
		for (let i = 0; i < count; i++) {
			this.items.push(new Soundtrack(i + 1));
		}
	}
}
