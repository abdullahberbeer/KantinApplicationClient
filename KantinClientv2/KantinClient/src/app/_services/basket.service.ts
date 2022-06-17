import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Basket } from '../_models/basket.model';

@Injectable({
  providedIn: 'root'
})
export class BasketService {
  baseUrl:string='https://localhost:5001';
  constructor(private http:HttpClient) { }
  getBaskets():Observable<Basket[]>{
    return this.http.get<Basket[]>(this.baseUrl+'/Basket');
  }
}
