import { TestBed } from '@angular/core/testing';

import { GhawatService } from './ghawat.service';

describe('GhawatService', () => {
  let service: GhawatService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GhawatService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
