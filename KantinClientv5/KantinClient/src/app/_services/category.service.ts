import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CategoryAddDto } from '../_dto/categoryDto/categoryAddDto.model';
import { CategoryListDto } from '../_dto/categoryDto/categoryListDto.model';
import { CategoryUpdateDto } from '../_dto/categoryDto/categoryUpdateDto.model';
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

  addCategory(categoryAddDto:CategoryAddDto):Observable<CategoryAddDto>{
    return this.http.post<CategoryAddDto>(this.baseUrl+'/Category/categoryAdd',categoryAddDto);
  }

  getCategory(categoryId:number):Observable<Category>{
return this.http.get<Category>(this.baseUrl+'/Category/'+categoryId);
  }

  updateCategory(categoryId:number,categoryUpdateDto:CategoryUpdateDto):Observable<CategoryUpdateDto>{
    return this.http.put<CategoryUpdateDto>(this.baseUrl+'/Category/categoryUpdate/'+categoryId,categoryUpdateDto);
  }

  deleteCategory(categoryId:number):Observable<Category>{
    return this.http.put<Category>(this.baseUrl+'/Category/categoryDelete/'+categoryId,categoryId);
  }
}
