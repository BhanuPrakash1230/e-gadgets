import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-manageaudio',
  templateUrl: './manageaudio.component.html',
  styleUrls: ['./manageaudio.component.css']
})
export class ManageaudioComponent implements OnInit {

  constructor(private productService:ProductsService) { }

  headsetDetails=[];
  ngOnInit() {
    this.productService.getHeadset().subscribe(headsetDetails=>{
      this.headsetDetails=headsetDetails['data']
    })
  }
  //add LAPTOP
  onAddHeadset(headset){
    this.productService.postHeadset(headset).subscribe(headsetDetails=>{
      this.headsetDetails=headsetDetails['data']
    })
  }

  onDeleteHeadset(headset){
    this.productService.deleteHeadset(headset).subscribe(headsetDetails=>{
      this.headsetDetails=headsetDetails['data']
    })
  }

  onEditHeadset(headset){
    this.productService.editHeadset(headset).subscribe(headsetDetails=>{
      this.headsetDetails=headsetDetails['data']
    })
  }

}
