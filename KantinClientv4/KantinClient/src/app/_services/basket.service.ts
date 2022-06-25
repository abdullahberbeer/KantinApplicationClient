import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AddBasketItemDto } from '../_dto/basketDto/addBasketItem.model';
import { BasketDeleteOneDto } from '../_dto/basketDto/basketDeleteOneDto.model';
import { BasketListDto } from '../_dto/basketDto/basketListDto.model';
import { Basket } from '../_models/basket.model';


@Injectable({
  providedIn: 'root'
})
export class BasketService {
  baseUrl:string='https://localhost:5001';
  constructor(private http:HttpClient) { }
  addBasketItem(addBasketItemDto: AddBasketItemDto):Observable< any>{
    return this.http.post(this.baseUrl+'/Basket/basketAddItem',addBasketItemDto, {responseType: 'text'});
  }

  getAllBasket():Observable<BasketListDto>{
    return this.http.get<BasketListDto>(this.baseUrl+'/Basket');
  }

  deleteUserAllBasket(basketId:number):Observable<Basket>{
    return this.http.put<Basket>(this.baseUrl+'/Basket/basketDelete/'+basketId,basketId);
  }
  deleteUserOneBasket(basketDeleteOneDto:BasketDeleteOneDto):Observable<Basket>{
    return this.http.put<Basket>(this.baseUrl+'/Basket/basketDeleteOne',basketDeleteOneDto);
  }
}
