import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {Team} from '../../../core/models/team';
import {environment} from '../../../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {PlayerCreateModel} from '../content/team-players/content/player-create/forms/player-create.form.model';
import {Player} from '../../../core/models/user';
import {PaymentFormFormModel} from '../content/team-players/content/player-list/forms/payment-form.form.model';
import {EditPlayerFormModel} from '../content/team-players/content/player-list/forms/edit-player-form.model';
import {Payment} from '../../../core/models/payment';
import {ApiResponse} from '../../../core/models/api-response';

@Injectable()
export class TeamsApi {

  constructor(private http: HttpClient) { }

  getTeams(): Observable<Team[]> {
    return this.http.get<Team[]>(`${environment.apiUrl}/coach/teams`);
  }

  createPlayer(player: PlayerCreateModel): Observable<Player> {
    return this.http.post<Player>(`${environment.apiUrl}/coach/player-registration`, player);
  }

  makePayment(_id: string, payment: PaymentFormFormModel): Observable<Payment> {
    return this.http.post<Payment>(`${environment.apiUrl}/coach/player/${_id}/payments`, payment);
  }

  getPayments(_id: string): Observable<Payment[]> {
    return this.http.get<Payment[]>(`${environment.apiUrl}/coach/player/${_id}/payments`);
  }

  editPlayer(_id: string, player: EditPlayerFormModel): Observable<Player> {
    return this.http.put<Player>(`${environment.apiUrl}/coach/player-list/${_id}`, player);
  }

  deletePlayer(_id: string): Observable<Player> {
    return this.http.delete<Player>(`${environment.apiUrl}/coach/player-list/${_id}`);
  }

  uploadFile(formData: FormData, team: string): Observable<ApiResponse> {
    return this.http.post<ApiResponse>(`${environment.apiUrl}/coach/upload-players/${team}`, formData);
  }

  uploadPhoto(formData: FormData, _id: string): Observable<Player> {
    return this.http.post<Player>(`${environment.apiUrl}/coach/upload-player-photo/${_id}`, formData);
  }

  deletePhoto(_id: string): Observable<Player> {
    return this.http.delete<Player>(`${environment.apiUrl}/coach/remove-player-photo/${_id}`);
  }
}
