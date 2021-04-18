import { TestBed } from '@angular/core/testing';

import { MagazineService } from './magazine.service';

describe('MagazineService', () => {
  let service: MagazineService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MagazineService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
