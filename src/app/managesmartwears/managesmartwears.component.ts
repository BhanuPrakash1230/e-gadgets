import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-managesmartwears',
  templateUrl: './managesmartwears.component.html',
  styleUrls: ['./managesmartwears.component.css']
})
export class ManagesmartwearsComponent implements OnInit {

  constructor(private productService:ProductsService) { }

  watchDetails=[];
  ngOnInit() {
    this.productService.getWatches().subscribe(watchDetails=>{
      this.watchDetails=watchDetails['data']
    })
  }
  //add LAPTOP
  onAddWatch(watch){
    this.productService.postWatches(watch).subscribe(watchDetails=>{
      this.watchDetails=watchDetails['data']
    })
  }

  onDeleteWatch(watch){
    this.productService.deleteWatches(watch).subscribe(watchDetails=>{
      this.watchDetails=watchDetails['data']
    })
  }

  onEditWatch(watch){
    this.productService.editWatches(watch).subscribe(watchDetails=>{
      this.watchDetails=watchDetails['data']
    })
  }

}
