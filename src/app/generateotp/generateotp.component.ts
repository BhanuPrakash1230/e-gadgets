import { Component, OnInit } from '@angular/core';
import { LoginService } from '../login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-generateotp',
  templateUrl: './generateotp.component.html',
  styleUrls: ['./generateotp.component.css']
})
export class GenerateotpComponent implements OnInit {

  constructor(private loginService:LoginService, private router:Router) { }
  validUser;
  ngOnInit() {
  }

  onForgotPassword(user){
    this.loginService.onForgotPassword(user).subscribe(res=>{
      console.log(res)
      if(res['message']==="user not found"){
        this.validUser="*user not available... Please enter valid username"
      }
      else if(res['message']==="user found"){
        localStorage.setItem("token",res['token'])
        localStorage.setItem("userName",res['userName'])
        this.router.navigate(['/headerfooter/OTPCheck'])
      }
    })
  }

}
