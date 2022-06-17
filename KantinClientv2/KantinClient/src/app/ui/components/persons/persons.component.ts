import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { Person } from 'src/app/_models/person.model';
import { PersonService } from 'src/app/_services/person.service';

@Component({
  selector: 'app-persons',
  templateUrl: './persons.component.html',
  styleUrls: ['./persons.component.css']
})
export class PersonsComponent implements OnInit {

  persons:Person[]=[];
  displayedColumns: string[] = [ 'firstName'];
  dataSource:MatTableDataSource<Person>=new MatTableDataSource<Person>();
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  filterString='';
  constructor(private personService:PersonService,private toastr:ToastrService,private spinnerService:NgxSpinnerService) { }

  ngOnInit(): void {
    this.getPersons();
  }
  getPersons(){
    this.spinnerService.show();
    this.personService.getPersons().subscribe((success)=>{
      this.spinnerService.hide();
      this.persons=success;
      this.dataSource=new MatTableDataSource<Person>(this.persons);
      this.dataSource.paginator=this.paginator;
      this.dataSource.sort=this.sort;
    },(err)=>{
      this.spinnerService.hide();
      this.toastr.error(err);
    })}
    filterPersons(){
      this.dataSource.filter=this.filterString.trim().toLocaleLowerCase();
      // this.dataSource.filterPredicate=(data,filter)=>{
      //   return data.name.toLocaleLowerCase().includes(filter)
      // }
    }
}
