import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {Team} from '../../../core/models/team';
import {environment} from '../../../../environments/environment';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class TeamsApiService {

  constructor(private http: HttpClient) { }


  getTeams(): Observable<Team[]> {
    return this.http.get<Team[]>(`${environment.apiUrl}/coach/teams`);
  }
}
