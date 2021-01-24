import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ResetPasswordFormModel} from '../forms/reset-password.form.model';
import {environment} from '../../../environments/environment';

@Injectable()
export class ResetPasswordApiService {

  constructor(private http: HttpClient) { }

  resetPassword(email: ResetPasswordFormModel) {
    return this.http.post(`${environment.apiUrl}/forgot`, email);
  }
}
