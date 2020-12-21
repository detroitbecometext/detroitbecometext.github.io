import { TestBed } from '@app/features/home/components/home-old/node_modules/@app/features/chapters/chapter-contents/opening-chapter-content/node_modules/@app/features/chapters/chapter/node_modules/@angular/core/testing';

import { DataService } from './data.service';

describe('DataService', () => {
    let service: DataService;

    beforeEach(() => {
        TestBed.configureTestingModule({});
        service = TestBed.inject(DataService);
    });

    it('should be created', () => {
        expect(service).toBeTruthy();
    });
});
