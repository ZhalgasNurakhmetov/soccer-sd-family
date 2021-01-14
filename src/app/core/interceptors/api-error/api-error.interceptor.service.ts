import { Injectable } from '@angular/core';
import {HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {ApiErrorHandlerFactory, ServerSideErrorStatus} from '../../error-handlers/api-error-handlers';
import {Observable, throwError} from 'rxjs';
import {catchError, retry} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ApiErrorInterceptorService implements HttpInterceptor{

  constructor(private apiErrorHandlerFactory: ApiErrorHandlerFactory) {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const apiErrorHandler = this.apiErrorHandlerFactory.getApiErrorHandler(request);
    request = apiErrorHandler.prepareRequest(request);
    return next.handle(request).pipe(
      retry(1),
      catchError((apiError: HttpErrorResponse) => {
        if (apiError.status !== ServerSideErrorStatus.UNAUTHORIZED) {
          apiErrorHandler.handleError(apiError);
        }
        return throwError(apiError);
      })
    );
  }
}
