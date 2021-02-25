import {TestBed} from '@angular/core/testing';

import {TeamsApi} from './teams.api';
import {HttpClientTestingModule} from '@angular/common/http/testing';

describe('TeamsApi', () => {
  let service: TeamsApi;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [TeamsApi]
    });
    service = TestBed.inject(TeamsApi);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
