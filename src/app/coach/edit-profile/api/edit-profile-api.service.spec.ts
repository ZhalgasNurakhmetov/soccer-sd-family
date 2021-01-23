import {TestBed} from '@angular/core/testing';

import {EditProfileApiService} from './edit-profile-api.service';
import {HttpClientTestingModule} from '@angular/common/http/testing';

describe('EditProfileApiService', () => {
  let service: EditProfileApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [EditProfileApiService]
    });
    service = TestBed.inject(EditProfileApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
