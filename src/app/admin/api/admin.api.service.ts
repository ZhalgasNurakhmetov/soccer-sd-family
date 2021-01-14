import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {User} from '../../core/models/user';
import {environment} from '../../../environments/environment';
import {ApiResponse} from '../../core/models/api-response';
import {AdminCreateFormModel} from '../content/admin-content/content/admin-create/forms/admin-create.form.model';
import {AdminEditFormModel} from '../content/admin-content/content/admin-list/forms/admin-edit.form.model';

@Injectable()
export class AdminApiService {

  constructor(private http: HttpClient) { }

  getAdminInfo(): Observable<User> {
    return this.http.get<User>(`${environment.apiUrl}/admin`);
  }

  getAdminList(): Observable<User[]> {
    return this.http.get<User[]>(`${environment.apiUrl}/admins`);
  }

  createAdmin(admin: AdminCreateFormModel): Observable<User> {
    return this.http.post<User>(`${environment.apiUrl}/admin`, admin);
  }

  editAdmin(id: number, admin: AdminEditFormModel): Observable<User> {
    return this.http.put<User>(`${environment.apiUrl}/admin/${id.toString()}`, admin);
  }

  deleteAdmin(id: number): Observable<ApiResponse> {
    return this.http.delete<ApiResponse>(`${environment.apiUrl}/admin/${id.toString()}`);
  }
}