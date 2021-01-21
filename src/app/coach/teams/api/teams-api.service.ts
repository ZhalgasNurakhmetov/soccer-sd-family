import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {Team} from '../../../core/models/team';
import {environment} from '../../../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {PlayerCreateModel} from '../content/team-players/content/player-create/forms/player-create.form.model';
import {Player} from '../../../core/models/user';

@Injectable()
export class TeamsApiService {

  constructor(private http: HttpClient) { }

  getTeams(): Observable<Team[]> {
    return this.http.get<Team[]>(`${environment.apiUrl}/coach/teams`);
  }

  createPlayer(player: PlayerCreateModel): Observable<Player> {
    return this.http.post<Player>(`${environment.apiUrl}/coach/player-registration`, player);
  }
}
