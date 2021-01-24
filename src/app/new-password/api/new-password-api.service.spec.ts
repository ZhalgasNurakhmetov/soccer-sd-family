import { TestBed } from '@angular/core/testing';

import { NewPasswordApiService } from './new-password-api.service';

describe('NewPasswordApiService', () => {
  let service: NewPasswordApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NewPasswordApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
