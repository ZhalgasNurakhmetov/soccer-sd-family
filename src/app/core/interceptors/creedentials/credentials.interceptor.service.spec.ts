import { TestBed } from '@angular/core/testing';

import { CredentialsInterceptorService } from './credentials.interceptor.service';
import {HttpClientTestingModule} from '@angular/common/http/testing';

describe('CredentialsInterceptorService', () => {
  let service: CredentialsInterceptorService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });
    service = TestBed.inject(CredentialsInterceptorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
