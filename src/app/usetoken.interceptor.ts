import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class UsetokenInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {

    let usetoken =sessionStorage.getItem('token')
    console.log(usetoken);

    request= request.clone({
      setHeaders:{
        'Authentication':String(usetoken)
      }
    })
    return next.handle(request);
  }
}

