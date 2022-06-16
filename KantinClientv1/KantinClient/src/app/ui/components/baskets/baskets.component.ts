import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Basket } from 'src/app/_models/basket.model';
import { Person } from 'src/app/_models/person.model';
import { BasketService } from 'src/app/_services/basket.service';

@Component({
  selector: 'app-baskets',
  templateUrl: './baskets.component.html',
  styleUrls: ['./baskets.component.css']
})
export class BasketsComponent implements OnInit {

  baskets:Basket[]=[];
  displayedColumns: string[] = [ 'personId'];
  dataSource:MatTableDataSource<Basket>=new MatTableDataSource<Basket>();
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  filterString='';
  constructor(private basketService:BasketService) { }

  ngOnInit(): void {
    this.getBaskets();
  }
  getBaskets(){
    this.basketService.getBaskets().subscribe((success)=>{
      this.baskets=success;
      this.dataSource=new MatTableDataSource<Basket>(this.baskets);
      this.dataSource.paginator=this.paginator;
      this.dataSource.sort=this.sort;
    })}
    filterBaskets(){
      this.dataSource.filter=this.filterString.trim().toLocaleLowerCase();

    }

}
