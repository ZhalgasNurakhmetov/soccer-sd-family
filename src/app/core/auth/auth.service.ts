import { Injectable } from '@angular/core';
import {Token} from '../models/token';
import {BehaviorSubject, Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../environments/environment';
import {LoginFormModel} from '../../start/forms/start.form.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  authenticationState = new BehaviorSubject(false);

  constructor(
    private http: HttpClient
  ) {
    if (this.getToken()) {
      this.authenticationState.next(true);
    }
  }

  setToken(token: Token) {
    localStorage.setItem("AUTH_TOKEN", JSON.stringify(token));
    this.authenticationState.next(true);
  }

  getToken(): Token {
    try {
      return JSON.parse(localStorage.getItem("AUTH_TOKEN"));
    } catch {
      return null as Token;
    }
  }

  login(loginData: LoginFormModel): Observable<Token> {
    return this.http.post<Token>(`${environment.apiUrl}/login`, loginData);
  }

  logout() {
    localStorage.removeItem("AUTH_TOKEN");
    this.authenticationState.next(false);
  }

  isAuthenticated() {
    return this.authenticationState.value;
  }
}
