import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {ChangePasswordFormModel} from '../forms/change-password.form.model';
import {environment} from '../../../../environments/environment';
import {User} from '../../../core/models/user';

@Injectable()
export class ChangePasswordApi {

  constructor(private http: HttpClient) { }

  changePassword(password: ChangePasswordFormModel): Observable<User> {
    return this.http.put<User>(`${environment.apiUrl}/coach/change-password`, password);
  }
}
