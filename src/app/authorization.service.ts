import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()

export class AuthorizationService implements HttpInterceptor{

  intercept(request: HttpRequest<any>, next: HttpHandler):Observable<HttpEvent<any>> {

    //read token from local storage
    var token=localStorage.getItem('token');
    //if token available,then clone it to request object and send to next handler
    if(token){
      const cloned=request.clone({
          headers:request.headers.set("Authorization","Bearer "+ token)
      });
      return next.handle(cloned);
    }

    //if token not available,send request object as it is to next handler
    else{
      return next.handle(request);
    }
  }
}
