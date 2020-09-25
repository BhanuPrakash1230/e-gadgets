import { Component, OnInit } from '@angular/core';
import { LoggedinuserService } from '../loggedinuser.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  constructor( private loggedinservice:LoggedinuserService) { }
  name;
  ngOnInit(){
    this.name=this.loggedinservice.sendName();
  }
}
