import { TestBed } from '@angular/core/testing';

import { ChapterService } from './chapter.service';

describe('ChapterService', () => {
    let service: ChapterService;

    beforeEach(() => {
        TestBed.configureTestingModule({});
        service = TestBed.inject(ChapterService);
    });

    it('should be created', () => {
        expect(service).toBeTruthy();
    });
});
