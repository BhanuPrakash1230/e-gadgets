import { Component, OnInit } from '@angular/core';
import { UserdataService } from '../userdata.service';

@Component({
  selector: 'app-users-data',
  templateUrl: './users-data.component.html',
  styleUrls: ['./users-data.component.css']
})
export class UsersDataComponent implements OnInit {

  constructor(private usersDataService:UserdataService) { }

  userDetails=[];
  ngOnInit() {
    this.usersDataService.getUsersData().subscribe(userDetails=>{
        this.userDetails=userDetails['userDetails']
    })
  }

}
