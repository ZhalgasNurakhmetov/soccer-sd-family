import { TestBed } from '@angular/core/testing';

import { ResetPasswordApi } from './reset-password.api';
import {HttpClientTestingModule} from '@angular/common/http/testing';

describe('ResetPasswordApi', () => {
  let service: ResetPasswordApi;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [ResetPasswordApi]
    });
    service = TestBed.inject(ResetPasswordApi);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
