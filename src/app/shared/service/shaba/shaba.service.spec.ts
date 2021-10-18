import { TestBed } from '@angular/core/testing';

import { ShabaService } from './shaba.service';

describe('ShabaService', () => {
  let service: ShabaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ShabaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
