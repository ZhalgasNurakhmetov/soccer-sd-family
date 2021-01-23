import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {ApiResponse} from '../../../core/models/api-response';
import {ChangePasswordFormModel} from '../forms/change-password.form.model';
import {environment} from '../../../../environments/environment';

@Injectable()
export class ChangePasswordApiService {

  constructor(private http: HttpClient) { }

  changePassword(password: ChangePasswordFormModel): Observable<ApiResponse> {
    return this.http.put<ApiResponse>(`${environment.apiUrl}/coach/change-password`, password);
  }
}
