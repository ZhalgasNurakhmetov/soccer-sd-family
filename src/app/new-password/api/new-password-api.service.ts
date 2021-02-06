import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class NewPasswordApiService {

  constructor(private http: HttpClient) { }
}
