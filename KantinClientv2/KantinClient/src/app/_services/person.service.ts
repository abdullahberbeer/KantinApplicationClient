import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Person } from '../_models/person.model';

@Injectable({
  providedIn: 'root'
})
export class PersonService {
  baseUrl:string='https://localhost:5001';
  constructor(private http:HttpClient) { }
  getPersons():Observable<Person[]>{
    return this.http.get<Person[]>(this.baseUrl+'/Person');
  }
}
