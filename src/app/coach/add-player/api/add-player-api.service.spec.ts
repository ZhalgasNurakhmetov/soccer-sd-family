import {TestBed} from '@angular/core/testing';

import {AddPlayerApiService} from './add-player-api.service';
import {HttpClientTestingModule} from '@angular/common/http/testing';

describe('AddPlayerApiService', () => {
  let service: AddPlayerApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [AddPlayerApiService]
    });
    service = TestBed.inject(AddPlayerApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
