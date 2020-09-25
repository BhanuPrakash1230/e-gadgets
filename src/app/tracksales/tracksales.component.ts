import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-tracksales',
  templateUrl: './tracksales.component.html',
  styleUrls: ['./tracksales.component.css']
})
export class TracksalesComponent implements OnInit {
  purchasedData=[];
  constructor(private cartService:CartService) { }

  ngOnInit() {
    this.cartService.getFromPurchase().subscribe(purchasedData=>{
      this.purchasedData=purchasedData['purchaseData'];
    })
  }

}
