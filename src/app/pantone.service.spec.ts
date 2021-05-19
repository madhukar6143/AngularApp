import { TestBed } from '@angular/core/testing';

import { PantoneService } from './pantone.service';

describe('PantoneService', () => {
  let service: PantoneService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PantoneService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
