import { TestBed } from '@angular/core/testing';

import { SouraService } from './soura.service';

describe('SouraService', () => {
  let service: SouraService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SouraService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
