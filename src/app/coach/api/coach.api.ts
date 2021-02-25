import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../environments/environment';
import {Observable} from 'rxjs';
import {User} from '../../core/models/user';

@Injectable()
export class CoachApi {

  constructor(private http: HttpClient) { }

  getCoachInfo(): Observable<User> {
    return this.http.get<User>(`${environment.apiUrl}/coach`);
  }

}
