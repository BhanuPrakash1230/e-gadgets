              import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class CartService {

  constructor(private httpClient:HttpClient) { }
  
  getCart():Observable<any[]>{
    return this.httpClient.get<any[]>('/cart/getFromCart')
  }

  removeFromCart(cart):Observable<any[]>{
    return this.httpClient.delete<any[]>(`/cart/removeFromCart/${cart.cartProductID}`)
  }

  buyNow(cart):Observable<any[]>{
    return this.httpClient.post<any[]>('/cart/addToPurchase',cart)
  }
  
  removeAllFromCart(cart):Observable<any[]>{
    return this.httpClient.delete<any[]>(`/cart/removeAllFromCart/${cart.userName}`)
  }

  getFromPurchase():Observable<any[]>{
    return this.httpClient.get<any[]>('/cart/getFromPurchase')
  }
}
