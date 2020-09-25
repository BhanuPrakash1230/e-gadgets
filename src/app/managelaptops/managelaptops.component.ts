import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-managelaptops',
  templateUrl: './managelaptops.component.html',
  styleUrls: ['./managelaptops.component.css']
})
export class ManagelaptopsComponent implements OnInit {

  constructor(private productService:ProductsService) { }

  laptopDetails=[];
  ngOnInit() {
    this.productService.getLaptops().subscribe(laptopDetails=>{
      this.laptopDetails=laptopDetails['data']
    })
  }
  //add LAPTOP
  onAddLaptop(laptop){
    this.productService.postLaptops(laptop).subscribe(laptopDetails=>{
      this.laptopDetails=laptopDetails['data']
    })
  }

  onDeleteLaptop(laptop){
    this.productService.deleteLaptops(laptop).subscribe(laptopDetails=>{
      this.laptopDetails=laptopDetails['data']
    })
  }

  onEditLaptop(laptop){
    this.productService.editLaptops(laptop).subscribe(laptopDetails=>{
      this.laptopDetails=laptopDetails['data']
    })
  }
  

}
