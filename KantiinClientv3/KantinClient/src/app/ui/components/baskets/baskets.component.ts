import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { Basket } from 'src/app/_models/basket.model';
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
  constructor(private basketService:BasketService,private toastr:ToastrService,private spinnerService:NgxSpinnerService) { }

  ngOnInit(): void {
    // this.getBaskets();
  }
  // getBaskets(){
  //   this.spinnerService.show();
  //   this.basketService.getBaskets().subscribe((success)=>{
  //     this.spinnerService.hide();
  //     this.baskets=success;
  //     this.dataSource=new MatTableDataSource<Basket>(this.baskets);
  //     this.dataSource.paginator=this.paginator;
  //     this.dataSource.sort=this.sort;
  //   },(err)=>{
  //     this.spinnerService.hide();
  //     this.toastr.error(err)
  //   })}
    filterBaskets(){
      this.dataSource.filter=this.filterString.trim().toLocaleLowerCase();

    }

}
