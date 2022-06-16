import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../_models/product.model';


@Injectable({
  providedIn: 'root'
})
export class ProductService {
  baseUrl:string='https://localhost:5001';

  constructor(private http:HttpClient) { }

  getProducts():Observable<Product[]>{
    return this.http.get<Product[]>(this.baseUrl+'/Product');
  }
}
