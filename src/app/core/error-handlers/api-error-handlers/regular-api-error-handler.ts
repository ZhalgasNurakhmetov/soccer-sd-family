import { HttpErrorResponse, HttpRequest } from '@angular/common/http';
import { Injectable, NgZone } from '@angular/core';
import { throwError } from 'rxjs';
import { ApiErrorHandler } from './api-error-handler.factory';
import { ServerSideErrorStatus } from './server-side-error-status.enum';

@Injectable({
  providedIn: 'root',
})
export class RegularApiErrorHandler implements ApiErrorHandler {
  constructor(private ngZone: NgZone) {}

  prepareRequest(request: HttpRequest<any>): HttpRequest<any> {
    return request;
  }

  handleError(apiError: HttpErrorResponse): void {
    if (apiError instanceof HttpErrorResponse) {
      switch (apiError.status) {
        case ServerSideErrorStatus.BAD_REQUEST: {
          console.log('BAD REQUEST', apiError);
          // this.ngZone.run(() => this.toaster.show({ type: 'error', title: 'Ошибка', message: apiError.error.message }));
          break;
        }
        case ServerSideErrorStatus.NOT_FOUND: {
          console.error('NOT_FOUND', apiError);
          // this.ngZone.run(() =>
          //   this.toaster.show({ type: 'warning', title: 'Нет ресурса!', message: 'К сожалению, этот ресурс недоступен' })
          // );
          break;
        }
        case ServerSideErrorStatus.FORBIDDEN: {
          console.error('FORBIDDEN', apiError);
          break;
        }
        case ServerSideErrorStatus.ITERNAL_SERVER_ERROR: {
          console.error('INTERNAL_SERVER_ERROR', apiError);
          // this.ngZone.run(() =>
          //   this.toaster.show({
          //     type: 'warning',
          //     title: 'Нет доступа!',
          //     message: 'К сожалению, функционал недоступен по техническим причинам',
          //   })
          // );
          break;
        }
        case ServerSideErrorStatus.BAD_GATEWAY: {
          console.error('BAD_GATEWAY', apiError);
          // this.ngZone.run(() =>
          //   this.toaster.show({
          //     type: 'warning',
          //     title: 'Нет доступа!',
          //     message: 'К сожалению, сервер недоступен. Возможно из-за проблем с соединением',
          //   })
          // );
          break;
        }
        case ServerSideErrorStatus.SERVICE_UNVAILABLE: {
          console.error('SERVICE_UNAVAILABLE', apiError);
          // this.ngZone.run(() =>
          //   this.toaster.show({ type: 'warning', title: 'Нет доступа!', message: 'К сожалению, сервер недоступен по техническим причинам' })
          // );
          break;
        }
        case ServerSideErrorStatus.GATEWAY_TIMEOUT: {
          console.error('GATEWAY_TIMEOUT', apiError);
          // this.ngZone.run(() =>
          //   this.toaster.show({
          //     type: 'warning',
          //     title: 'Нет доступа!',
          //     message: 'К сожалению, сервер недоступен. Возможно из-за проблем с соединением',
          //   })
          // );
          break;
        }
        default: {
          console.error('UNDEFINED ERROR', apiError);
          throwError(apiError);
          break;
        }
      }
    }
  }
}
