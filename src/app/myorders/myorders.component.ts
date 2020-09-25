import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import { LoggedinuserService } from '../loggedinuser.service';

@Component({
  selector: 'app-myorders',
  templateUrl: './myorders.component.html',
  styleUrls: ['./myorders.component.css']
})
export class MyordersComponent implements OnInit {

  constructor(private cartService:CartService,private loggedInUserService:LoggedinuserService) { }
  purchasedData=[]
  noPurchase;
  userName;
  ngOnInit() {
    this.userName=this.loggedInUserService.sendUsername()
    this.cartService.getFromPurchase().subscribe(cartData=>{
      
      for (let index = 0; index < cartData['purchaseData'].length; index++) {
        if(cartData['purchaseData'][index].userName===this.userName){
          delete cartData['purchaseData'][index]._id
          this.purchasedData.push(cartData['purchaseData'][index])
        }  
      }
      if(this.purchasedData.length===0){
        this.noPurchase="Nothing"
      }
    })
  }

}
