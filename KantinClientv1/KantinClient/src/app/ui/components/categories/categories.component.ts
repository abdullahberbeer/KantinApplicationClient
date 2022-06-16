import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Category } from 'src/app/_models/category.model';
import { CategoryService } from 'src/app/_services/category.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {


  categories:Category[]=[];
  displayedColumns: string[] = [ 'name'];
  dataSource:MatTableDataSource<Category>=new MatTableDataSource<Category>();
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  filterString='';
  constructor(private categoryService:CategoryService) { }

  ngOnInit(): void {
    this.getCategories();
  }
  getCategories(){
    this.categoryService.getCategories().subscribe((success)=>{
      this.categories=success;
      this.dataSource=new MatTableDataSource<Category>(this.categories);
      this.dataSource.paginator=this.paginator;
      this.dataSource.sort=this.sort;
    })}
    filterCategories(){
      this.dataSource.filter=this.filterString.trim().toLocaleLowerCase();
      this.dataSource.filterPredicate=(data,filter)=>{
        return data.name.toLocaleLowerCase().includes(filter)
      }
    }
}
