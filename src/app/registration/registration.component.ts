import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  constructor(private httpClient:HttpClient,private router:Router) { }
  genders=['male','female','others']
  checkUserName:string;
  checkPassword:string;
  userName:any={};
  ngOnInit() {
  }
  onSubmit(userData){
    if(userData.userName===""){
      this.checkUserName="username should not be empty";
    }
    else if(userData.password===""){
      this.checkUserName="";
      this.checkPassword="password should not be empty";
    }
    else{
    this.httpClient.post('/user/register',userData).subscribe(response=>{
                                                        alert(response['message'])
                                                        if(response['message']===" User registered successfully "){
                                                          this.router.navigate(['headerfooter/login'])
                                                        }
    })
    }
  }

  onBlur(user){
    console.log(user)
    this.userName.userName=user
    this.httpClient.post('/user/checkUser',this.userName).subscribe(response=>{
                          alert(response['message'])
    })
  }
  }
