import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../products.service';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { LoggedinuserService } from '../loggedinuser.service';

@Component({
  selector: 'app-audio',
  templateUrl: './audio.component.html',
  styleUrls: ['./audio.component.css']
})
export class AudioComponent implements OnInit {

  constructor(private productService:ProductsService,private loggedInUserService:LoggedinuserService,private httpClient:HttpClient,private router:Router) { }

  headsetDetails=[];
  userName;
  ngOnInit(){
    this.productService.getHeadset().subscribe(headsetDetails=>{
      this.headsetDetails=headsetDetails['data'];
    })
    
  }
  cart(headset){
    this.userName=this.loggedInUserService.sendUsername()
    headset.userName=this.userName;
    headset.cartProductID=this.userName+headset.productID
    this.httpClient.post('/cart/addToCart',headset).subscribe(message=>{
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
