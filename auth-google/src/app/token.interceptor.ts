import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {

  constructor(
    private authService:AuthService
  ) {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    let token = this.authService.getLoggedUser();
    
    if (token) {
      console.log('token interceptor',token);
        request = request.clone({
            setHeaders: {
              
                Authorization: `Bearer ${token}`
            }
        });
    }


    return next.handle(request);
  }
}
