import { TestBed } from '@angular/core/testing';

import { TeamsApiService } from './teams-api.service';
import {HttpClientTestingModule} from '@angular/common/http/testing';

describe('TeamsApiService', () => {
  let service: TeamsApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [TeamsApiService]
    });
    service = TestBed.inject(TeamsApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
