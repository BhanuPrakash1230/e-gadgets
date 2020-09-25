import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-managemobiles',
  templateUrl: './managemobiles.component.html',
  styleUrls: ['./managemobiles.component.css']
})
export class ManagemobilesComponent implements OnInit {

  constructor(private productService:ProductsService) { }
  mobileDetails=[]
  ngOnInit() {

    this.productService.getMobiles().subscribe(mobileDetails=>{
      console.log(mobileDetails['data'])
      this.mobileDetails=mobileDetails['data']
    })
  }

  //add MOBILE
  onAddMobile(mobile){
    this.productService.postMobiles(mobile).subscribe(mobileDetails=>{
      this.mobileDetails=mobileDetails['data']
    })
  }
  //Delete Mobile
  onDeleteMobile(mobile){
    this.productService.deleteMobiles(mobile).subscribe(mobileDetails=>{
      this.mobileDetails=mobileDetails['data']
    })
  }
  //Edit MOBILE
  onEditMobile(mobile){
    this.productService.editMobiles(mobile).subscribe(mobileDetails=>{
      this.mobileDetails=mobileDetails['data']
    })
  }

}
