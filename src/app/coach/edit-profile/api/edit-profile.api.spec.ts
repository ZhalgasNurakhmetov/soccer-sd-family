import {TestBed} from '@angular/core/testing';

import {EditProfileApi} from './edit-profile.api';
import {HttpClientTestingModule} from '@angular/common/http/testing';

describe('EditProfileApiService', () => {
  let service: EditProfileApi;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [EditProfileApi]
    });
    service = TestBed.inject(EditProfileApi);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
