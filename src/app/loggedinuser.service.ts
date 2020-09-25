import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class LoggedinuserService {

  constructor() { }
  userDetails=[];
  userName;
  name;
  
  getUserDetails(userDetails){
    this.userDetails=userDetails;
    this.userName=userDetails[0].userName;
    this.name=userDetails[0].firstName
  }
  sendUserDetails(){
    return this.userDetails;
  }
  sendUsername(){
    return this.userName;
  }
  sendName(){
    return this.name;
  }
}
