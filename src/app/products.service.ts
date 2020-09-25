import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private httpClient:HttpClient) { }

  getMobileDetails():Observable<any[]>{
    return this.httpClient.get<any[]>('assets/mobiles.json')
  }
  
  getLaptopDetails():Observable<any[]>{
    return this.httpClient.get<any[]>('assets/laptops.json')
  }

  getSmartwearDetails():Observable<any[]>{
    return this.httpClient.get<any[]>('assets/smartwears.json')
  }

  //----->manage Mobiles<-------
  postMobiles(mobile):Observable<any>{
    return this.httpClient.post<any>('/product/addMobiles',mobile)
  }

  getMobiles(){
    return this.httpClient.get<any[]>('/product/getMobiles')
  }

  deleteMobiles(mobile){
    return this.httpClient.delete<any[]>(`/product/deleteMobile/${mobile.productID}`)
  }

  editMobiles(mobile){
    return this.httpClient.put<any[]>('/product/editMobile',mobile)
  }

    //----->manage Laptops<-------
  getLaptops(){
    return this.httpClient.get<any[]>('/product/getLaptops')
  }

  postLaptops(laptop):Observable<any>{
    return this.httpClient.post<any>('/product/addLaptops',laptop)
  }

  editLaptops(laptop){
    return this.httpClient.put<any[]>('/product/editLaptop',laptop)
  }

  deleteLaptops(laptop){
    return this.httpClient.delete<any[]>(`/product/deleteLaptop/${laptop.productID}`)
  }

   //----->manage SmartWatches<-------
   getWatches(){
    return this.httpClient.get<any[]>('/product/getWatches')
  }

  postWatches(watch):Observable<any>{
    return this.httpClient.post<any>('/product/addWatches',watch)
  }

  editWatches(watch){
    return this.httpClient.put<any[]>('/product/editWatch',watch)
  }

  deleteWatches(watch){
    return this.httpClient.delete<any[]>(`/product/deleteWatch/${watch.productID}`)
  }

  //----->manage SmartWatches<-------
  getHeadset(){
    return this.httpClient.get<any[]>('/product/getHeadset')
  }

  postHeadset(headset):Observable<any>{
    return this.httpClient.post<any>('/product/addHeadset',headset)
  }

  editHeadset(headset){
    return this.httpClient.put<any[]>('/product/editHeadset',headset)
  }

  deleteHeadset(headset){
    return this.httpClient.delete<any[]>(`/product/deleteHeadset/${headset.productID}`)
  }

}
