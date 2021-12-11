import { TestBed } from '@angular/core/testing';

import { SerbeerService } from './serbeer.service';

describe('SerbeerService', () => {
  let service: SerbeerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SerbeerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
