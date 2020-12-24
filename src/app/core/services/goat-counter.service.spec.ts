import { TestBed } from '@angular/core/testing';

import { GoatCounterService } from './goat-counter.service';

describe('GoatCounterService', () => {
  let service: GoatCounterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GoatCounterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
