import {TestBed} from '@angular/core/testing';

import {AddPlayerApi} from './add-player.api';
import {HttpClientTestingModule} from '@angular/common/http/testing';

describe('AddPlayerApi', () => {
  let service: AddPlayerApi;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [AddPlayerApi]
    });
    service = TestBed.inject(AddPlayerApi);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
