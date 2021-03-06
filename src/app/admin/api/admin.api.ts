import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Player, User} from '../../core/models/user';
import {environment} from '../../../environments/environment';
import {ApiResponse} from '../../core/models/api-response';
import {AdminCreateFormModel} from '../content/admin-content/content/admin-create/forms/admin-create.form.model';
import {AdminEditFormModel} from '../content/admin-content/content/admin-list/forms/admin-edit.form.model';
import {ChangePasswordFormModel} from '../content/change-password/forms/change-password.form.model';
import {CoachCreateFormModel} from '../content/coach-content/content/coach-create/forms/coach-create,form.model';

@Injectable()
export class AdminApi {

  constructor(private http: HttpClient) { }

  getAdminInfo(): Observable<User> {
    return this.http.get<User>(`${environment.apiUrl}/admin`);
  }

  getAdminList(): Observable<User[]> {
    return this.http.get<User[]>(`${environment.apiUrl}/admin/admin-list`);
  }

  createAdmin(admin: AdminCreateFormModel): Observable<User> {
    return this.http.post<User>(`${environment.apiUrl}/admin`, admin);
  }

  editAdmin(id: string, admin: AdminEditFormModel): Observable<User> {
    return this.http.put<User>(`${environment.apiUrl}/admin/admin-list/${id}`, admin);
  }

  changePassword(passwords: ChangePasswordFormModel): Observable<User> {
    return this.http.put<User>(`${environment.apiUrl}/admin/change-password`, passwords);
  }

  deleteAdmin(id: string): Observable<User> {
    return this.http.delete<User>(`${environment.apiUrl}/admin/admin-list/${id}`);
  }

  getCoachList(): Observable<User[]> {
    return this.http.get<User[]>(`${environment.apiUrl}/admin/coach-list`);
  }

  createCoach(coach: CoachCreateFormModel): Observable<User> {
    return this.http.post<User>(`${environment.apiUrl}/admin/coach-list`, coach);
  }

  deleteCoach(id: string): Observable<User> {
    return this.http.delete<User>(`${environment.apiUrl}/admin/coach-list/${id}`);
  }

  deleteAllCoaches(): Observable<ApiResponse> {
    return this.http.delete<ApiResponse>(`${environment.apiUrl}/admin/coach-list`);
  }

  getPlayerList(): Observable<Player[]> {
    return this.http.get<Player[]>(`${environment.apiUrl}/admin/player-list`);
  }

  deleteAllPlayers(): Observable<ApiResponse> {
    return this.http.delete<ApiResponse>(`${environment.apiUrl}/admin/player-list`);
  }
}
