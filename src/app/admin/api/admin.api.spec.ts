import {TestBed} from '@angular/core/testing';

import {AdminApi} from './admin.api';
import {HttpClientTestingModule} from '@angular/common/http/testing';

describe('AdminApi', () => {
  let service: AdminApi;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [AdminApi]
    });
    service = TestBed.inject(AdminApi);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
