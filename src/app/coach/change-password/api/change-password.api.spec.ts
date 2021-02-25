import {TestBed} from '@angular/core/testing';

import {ChangePasswordApi} from './change-password.api';
import {HttpClientTestingModule} from '@angular/common/http/testing';

describe('ChangePasswordApi', () => {
  let service: ChangePasswordApi;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [ChangePasswordApi]
    });
    service = TestBed.inject(ChangePasswordApi);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
