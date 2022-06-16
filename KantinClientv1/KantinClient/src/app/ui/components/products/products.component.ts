import { Component,AfterViewInit, ViewChild, OnInit } from '@angular/core';
import { Product } from 'src/app/_models/product.model';
import { ProductService } from 'src/app/_services/product.service';
import {MatPaginator} from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  products:Product[]=[];
  displayedColumns: string[] = [ 'name','price','stock'];
  dataSource:MatTableDataSource<Product>=new MatTableDataSource<Product>();
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  filterString:string='';
  constructor(private productService:ProductService
    ) { }

  ngOnInit(): void {
    this.getProducts();
  }

  getProducts(){
    this.productService.getProducts().subscribe((success)=>{
      this.products=success;
      this.dataSource=new MatTableDataSource<Product>(this.products);
      this.dataSource.paginator=this.paginator;
      this.dataSource.sort=this.sort;
    })
  }
  filterProducts(){
    this.dataSource.filter=this.filterString.trim().toLocaleLowerCase();
    this.dataSource.filterPredicate=(data,filter)=>{
      return data.name.toLocaleLowerCase().includes(filter)
    }
  }
}
