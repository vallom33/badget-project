import { TestBed } from '@angular/core/testing';

import { BadgeStatusService } from './badge-status.service';

describe('BadgeStatusService', () => {
  let service: BadgeStatusService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BadgeStatusService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
