import { TestBed } from '@angular/core/testing';

import { CoachApiService } from './coach-api.service';
import {HttpClientTestingModule} from '@angular/common/http/testing';

describe('CoachApiService', () => {
  let service: CoachApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [CoachApiService]
    });
    service = TestBed.inject(CoachApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
