import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AddBasketItemDto } from '../_dto/basketDto/addBasketItem.model';
import { Basket } from '../_models/basket.model';


@Injectable({
  providedIn: 'root'
})
export class BasketService {
  baseUrl:string='https://localhost:5001';
  constructor(private http:HttpClient) { }
  addBasketItem(addBasketItemDto: AddBasketItemDto):Observable< AddBasketItemDto>{
    return this.http.post<AddBasketItemDto>(this.baseUrl+'/Basket/basketAddItem',addBasketItemDto);
  }
}
