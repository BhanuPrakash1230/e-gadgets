import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private httpClient:HttpClient) { }
  username;
  getUserLoginDetails(loginDetails):Observable<any>{
    return this.httpClient.post('/user/login',loginDetails)
  }
  onForgotPassword(user):Observable<any>{
    console.log(user)
    return this.httpClient.post('user/forgotpassword',user)
  }
}
