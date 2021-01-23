import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {EditProfileFormsModel} from '../forms/edit-profile.forms.model';
import {Observable} from 'rxjs';
import {User} from '../../../core/models/user';
import {environment} from '../../../../environments/environment';

@Injectable()
export class EditProfileApiService {

  constructor(private http: HttpClient) { }

  editProfile(profile: EditProfileFormsModel): Observable<User> {
    return this.http.put<User>(`${environment.apiUrl}/coach`, profile);
  }
}
