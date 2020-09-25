import { Component } from '@angular/core';
import { LoginService } from '../login.service';
import { Router } from '@angular/router';
import { LoggedinuserService } from '../loggedinuser.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(private loginService:LoginService, private router:Router,private loggedInUser:LoggedinuserService) { }
  loginMembers=['ADMIN','USER'];
  invalidLogin:string;
  validUser;
  onSubmit(loginDetails){
    if (loginDetails.member==="USER") {
      this.loginService.getUserLoginDetails(loginDetails).subscribe(message=>{
        localStorage.setItem('token',message['token'])
        if(message['token']===undefined){
          this.invalidLogin="enter valid details";
        }
        else{
          this.loggedInUser.getUserDetails(message['userDetails']);
          this.router.navigate(['user'])
        }
      }) 
    }
    else if (loginDetails.member==="ADMIN"){
      if(loginDetails.userName==='admin'){
        if(loginDetails.password==='admin'){
            this.router.navigate(['admin']);
        }
        else{
          this.invalidLogin="invalid password"
        } 
      }
      else{
        this.invalidLogin="invalid username"
      }          
    }
    else{
      this.invalidLogin="select ADMIN/USER";
    }
  }

}
