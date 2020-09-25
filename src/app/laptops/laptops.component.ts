import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../products.service';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { LoggedinuserService } from '../loggedinuser.service';

@Component({
  selector: 'app-laptops',
  templateUrl: './laptops.component.html',
  styleUrls: ['./laptops.component.css']
})
export class LaptopsComponent implements OnInit {

  constructor(private productService:ProductsService,private loggedInUserService:LoggedinuserService,private httpClient:HttpClient,private router:Router) { }

  laptopDetails=[];
  userName
  ngOnInit(){
    this.productService.getLaptops().subscribe(laptopDetails=>{
      this.laptopDetails=laptopDetails['data'];
    })
    
  }
  cart(laptop){
    this.userName=this.loggedInUserService.sendUsername()
    laptop.userName=this.userName;
    laptop.cartProductID=this.userName+laptop.productID
    this.httpClient.post('/cart/addToCart',laptop).subscribe(message=>{
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
