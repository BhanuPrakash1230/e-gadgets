import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserdataService {

  constructor(private httpClient:HttpClient) { }

  getUsersData():Observable<any>{
    return this.httpClient.get<any>('/user/usersDetails');
  }

  editUser(user):Observable<any[]>{
    return this.httpClient.put<any[]>('/user/edit',user)
  }
}
