import { Component, OnInit, OnDestroy } from '@angular/core';
import { UserdataService } from '../userdata.service';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { LoggedinuserService } from '../loggedinuser.service';

@Component({
  selector: 'app-userprofile',
  templateUrl: './userprofile.component.html',
  styleUrls: ['./userprofile.component.css']
})
export class UserprofileComponent implements OnInit {

  constructor(private userdataService:UserdataService,private router:Router,private loggedInUserService:LoggedinuserService) { }
  
  userDetails=[];
  user={};
  genders=['male','female','others']
  ngOnInit() {
    this.userDetails=this.loggedInUserService.sendUserDetails()
  }
  onEditUser(user){
    console.log(user)
    this.userdataService.editUser(user).subscribe(userDetails=>{
      this.userDetails=userDetails['userDetails']
      this.user=this.userDetails[0]
    })
  }
  


}
