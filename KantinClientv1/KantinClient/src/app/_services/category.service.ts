import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Category } from '../_models/category.model';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  baseUrl:string='https://localhost:5001';
  constructor(private http:HttpClient) { }
  getCategories():Observable<Category[]>{
    return this.http.get<Category[]>(this.baseUrl+'/Category');
  }
}
