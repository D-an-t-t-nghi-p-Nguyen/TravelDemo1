import { TestBed } from '@angular/core/testing';

import { VnService } from './vn.service';

describe('VnService', () => {
  let service: VnService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VnService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
