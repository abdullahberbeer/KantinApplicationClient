import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Order } from '../_models/order.model';

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  baseUrl:string='https://localhost:5001';
  constructor(private http:HttpClient) { }
  getOrders():Observable<Order[]>{
    return this.http.get<Order[]>(this.baseUrl+'/Order');
  }
}
