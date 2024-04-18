import { TestBed } from '@angular/core/testing';

import { RtcstreamService } from './rtcstream.service';

describe('RtcstreamService', () => {
  let service: RtcstreamService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RtcstreamService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
