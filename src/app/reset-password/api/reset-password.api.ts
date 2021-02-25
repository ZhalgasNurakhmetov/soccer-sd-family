import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ResetPasswordForm, ResetPasswordFormModel} from '../forms/reset-password.form.model';
import {environment} from '../../../environments/environment';
import {Observable} from 'rxjs';
import {ApiResponse} from '../../core/models/api-response';
import {User} from '../../core/models/user';

@Injectable()
export class ResetPasswordApi {

  constructor(private http: HttpClient) { }

  resetPassword(email: ResetPasswordFormModel): Observable<ApiResponse> {
    return this.http.post<ApiResponse>(`${environment.apiUrl}/reset-password`, email);
  }

  changePassword(newPassword: ResetPasswordForm): Observable<User> {
    return this.http.post<User>(`${environment.apiUrl}/set-new-password`, newPassword);
  }
}
