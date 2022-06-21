import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PersonAddDto } from '../_dto/personDto/personAddDto.model';
import { PersonListDto } from '../_dto/personDto/personListDto.model';
import { PersonUpdateDto } from '../_dto/personDto/personUpdateDto.model';
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

  addPerson(personAddDto:PersonAddDto):Observable<PersonAddDto>{
    return this.http.post<PersonAddDto>(this.baseUrl+'/Person/personAdd',personAddDto);
  }

  getPerson(personId:number):Observable<PersonListDto>{
return this.http.get<PersonListDto>(this.baseUrl+'/Person/'+personId);
  }

  updatePerson(personId:number,personUpdateDto:PersonUpdateDto):Observable<PersonUpdateDto>{
    return this.http.put<PersonUpdateDto>(this.baseUrl+'/Person/personUpdate/'+personId,personUpdateDto);
  }

  deletePerson(personId:number):Observable<Person>{
    return this.http.put<Person>(this.baseUrl+'/Person/personDelete/'+personId,personId);
  }
}
