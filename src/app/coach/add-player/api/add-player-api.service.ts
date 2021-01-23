import {Injectable} from '@angular/core';
import {PlayerCreateModel} from '../../teams/content/team-players/content/player-create/forms/player-create.form.model';
import {Observable} from 'rxjs';
import {Player} from '../../../core/models/user';
import {environment} from '../../../../environments/environment';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class AddPlayerApiService {

  constructor(private http: HttpClient) { }

  createPlayer(player: PlayerCreateModel): Observable<Player> {
    return this.http.post<Player>(`${environment.apiUrl}/coach/player-registration`, player);
  }
}
