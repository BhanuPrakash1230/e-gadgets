import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sendotp',
  templateUrl: './sendotp.component.html',
  styleUrls: ['./sendotp.component.css']
})
export class SendotpComponent implements OnInit {

  constructor(private httpClient:HttpClient,private router:Router) { }

  ngOnInit() {
  }
  
  verifyOTP(OTP){
    OTP.currentTime=new Date().getTime();
    console.log(OTP)
    this.httpClient.post('user/verifyotp',OTP).subscribe(res=>{
      if(res['message']==="invalidOTP"){
       alert('invalid OTP...retry again')
      }
      else if(res['message']==="session expired"){
        alert('OTP has expired...please re-generate OTP')
       localStorage.clear()
       this.router.navigate(['/headerfooter/generateOTP'])
      }
      else if(res['message']==="verifiedOTP"){
           this.router.navigate(['/headerfooter/changepassword'])   
      }
    })
  }
}
