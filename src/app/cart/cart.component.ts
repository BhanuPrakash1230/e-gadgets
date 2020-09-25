import { Component, OnInit, OnDestroy } from '@angular/core';
import { CartService } from '../cart.service';
import { LoggedinuserService } from '../loggedinuser.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  constructor(private cartService:CartService,private loggedInUserService:LoggedinuserService,private router:Router) { }
  cartData=[]
  price=0;
  emptyCart;
  userName;
  ngOnInit() {
    this.userName=this.loggedInUserService.sendUsername()
    this.cartService.getCart().subscribe(cartData=>{
      
      for (let index = 0; index < cartData['cartData'].length; index++) {
        if(cartData['cartData'][index].userName===this.userName){
          delete cartData['cartData'][index]._id
          this.cartData.push(cartData['cartData'][index])
          this.price=this.price+cartData['cartData'][index].price
        }  
      }
      if(this.cartData.length===0){
        this.emptyCart="Cart is Empty"
      }
    })
  }
  removeFromCart(cart){
    this.cartService.removeFromCart(cart).subscribe(cartData=>{
      this.cartData=[];
      this.price=0;
      for (let index = 0; index < cartData['cartData'].length; index++) {
        if(cartData['cartData'][index].userName===this.userName){
          delete cartData['cartData'][index]._id
          this.cartData.push(cartData['cartData'][index])
          this.price=this.price+cartData['cartData'][index].price
        }  
      }
      if(this.cartData.length===0){
        this.emptyCart="Cart is Empty"
      }
    })
  }
  
  buyNow(){
    this.cartService.buyNow(this.cartData).subscribe(message=>{
      if(message['message']==='purchased'){
        this.cartService.removeAllFromCart(this.cartData[0]).subscribe(cartData=>{
          this.cartData=[];
      this.price=0;
      for (let index = 0; index < cartData['cartData'].length; index++) {
        if(cartData['cartData'][index].userName===this.userName){
          delete cartData['cartData'][index]._id
          this.cartData.push(cartData['cartData'][index])
          this.price=this.price+cartData['cartData'][index].price
        } 
      }
      if(this.cartData.length===0){
        this.emptyCart="Cart is Empty"
        this.router.navigate(['user/myorders'])
      }
        })
      }
    })
  }

}
