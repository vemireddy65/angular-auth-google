import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { catchError, Observable, throwError } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {

  constructor(
    private authService:AuthService
  ) {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    // return next.handle(request);
    return next.handle(request).pipe(catchError(err => {
      if (err.status === 401) {
        alert('UnAuthurized user');
          this.authService.SignOut();
      }

      const error = err.error.message || err.statusText;
      return throwError(error);
  }))
  }
}
