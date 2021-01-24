import { TestBed } from '@angular/core/testing';

import { ResetPasswordApiService } from './reset-password-api.service';
import {HttpClientTestingModule} from '@angular/common/http/testing';

describe('ResetPasswordApiService', () => {
  let service: ResetPasswordApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [ResetPasswordApiService]
    });
    service = TestBed.inject(ResetPasswordApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
