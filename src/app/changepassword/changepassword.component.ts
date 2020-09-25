import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-changepassword',
  templateUrl: './changepassword.component.html',
  styleUrls: ['./changepassword.component.css']
})
export class ChangepasswordComponent implements OnInit {

  constructor(private httpClient:HttpClient, private router:Router) { }
  userName;
  text;
  ngOnInit() {
  }

  onChangePassword(password){
    this.userName=localStorage.getItem('userName')
    password.userName=this.userName
    console.log(password)
    this.httpClient.put('/user/changepassword',password).subscribe(res=>{
      alert('password changed')
      localStorage.clear();
      this.router.navigate(['/headerfooter/login'])
    })
  }
}
