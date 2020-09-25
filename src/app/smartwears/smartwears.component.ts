import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../products.service';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { LoggedinuserService } from '../loggedinuser.service';

@Component({
  selector: 'app-smartwears',
  templateUrl: './smartwears.component.html',
  styleUrls: ['./smartwears.component.css']
})
export class SmartwearsComponent implements OnInit {

  constructor(private productService:ProductsService,private loggedInUserService:LoggedinuserService,private httpClient:HttpClient,private router:Router) { }

  watchDetails=[];
  userName;
  ngOnInit(){
    this.productService.getWatches().subscribe(watchDetails=>{
      this.watchDetails=watchDetails['data'];
    })
    
  }
  cart(watch){
    this.userName=this.loggedInUserService.sendUsername()
    watch.userName=this.userName;
    watch.cartProductID=this.userName+watch.productID
    this.httpClient.post('/cart/addToCart',watch).subscribe(message=>{
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
