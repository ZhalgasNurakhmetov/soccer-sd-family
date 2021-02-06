import { TestBed } from '@angular/core/testing';

import { NewPasswordApiService } from './new-password-api.service';
import {HttpClientTestingModule} from '@angular/common/http/testing';

describe('NewPasswordApiService', () => {
  let service: NewPasswordApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [NewPasswordApiService]
    });
    service = TestBed.inject(NewPasswordApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
