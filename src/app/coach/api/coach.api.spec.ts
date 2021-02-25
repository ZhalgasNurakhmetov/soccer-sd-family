import {TestBed} from '@angular/core/testing';

import {CoachApi} from './coach.api';
import {HttpClientTestingModule} from '@angular/common/http/testing';

describe('CoachApi', () => {
  let service: CoachApi;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [CoachApi]
    });
    service = TestBed.inject(CoachApi);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
