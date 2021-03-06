import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {ApiErrorInterceptorService} from './core/interceptors/api-error/api-error.interceptor.service';
import {CredentialsInterceptorService} from './core/interceptors/creedentials/credentials.interceptor.service';
import {ToastrModule} from 'ngx-toastr';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot()
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: ApiErrorInterceptorService, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: CredentialsInterceptorService, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
