import { TestBed } from '@angular/core/testing';

import { ChangePasswordApiService } from './change-password-api.service';
import {HttpClientTestingModule} from '@angular/common/http/testing';

describe('ChangePasswordApiService', () => {
  let service: ChangePasswordApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [ChangePasswordApiService]
    });
    service = TestBed.inject(ChangePasswordApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
