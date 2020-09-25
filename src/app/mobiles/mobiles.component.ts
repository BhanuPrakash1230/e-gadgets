import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../products.service';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { LoggedinuserService } from '../loggedinuser.service';

@Component({
  selector: 'app-mobiles',
  templateUrl: './mobiles.component.html',
  styleUrls: ['./mobiles.component.css']
})
export class MobilesComponent implements OnInit{

  constructor(private productService:ProductsService,private loggedInUserService:LoggedinuserService ,private httpClient:HttpClient,private router:Router) { }

  mobileDetails=[];
  userName;
  userDetails;//logged-in User
  ngOnInit(){
    this.productService.getMobiles().subscribe(mobileDetails=>{
      this.mobileDetails=mobileDetails['data'];
    })
    
  }
  cart(mobile){
    this.userName=this.loggedInUserService.sendUsername()
    mobile.userName=this.userName;
    mobile.cartProductID=this.userName+mobile.productID
    this.httpClient.post('/cart/addToCart',mobile).subscribe(message=>{
        if(message['message']==="token not found"){
          alert('Please Login First')
          this.router.navigate(['headerfooter/login'])
        }
        else if(message['message']==="token expired"){
          alert('Session expired....Please Login Again')
          this.router.navigate(['headerfooter/login'])
        }
        else{
          alert(message['message'])
        }
      })
    
  }
}
