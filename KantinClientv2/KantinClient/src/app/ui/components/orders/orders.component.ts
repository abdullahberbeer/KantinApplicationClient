import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { Order } from 'src/app/_models/order.model';
import { OrderService } from 'src/app/_services/order.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {

  orders:Order[]=[];
  displayedColumns: string[] = [ 'personId'];
  dataSource:MatTableDataSource<Order>=new MatTableDataSource<Order>();
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  filterString='';
  constructor(private orderService:OrderService,private toastr:ToastrService,private spinnerService:NgxSpinnerService) { }

  ngOnInit(): void {
    this.getOrders();
  }
  getOrders(){
    this.spinnerService.show();
    this.orderService.getOrders().subscribe((success)=>{
      this.spinnerService.hide();
      this.orders=success;
      this.dataSource=new MatTableDataSource<Order>(this.orders);
      this.dataSource.paginator=this.paginator;
      this.dataSource.sort=this.sort;
    },(err)=>{
      this.spinnerService.hide();
      this.toastr.error(err);
    })}
    filterOrders(){
      this.dataSource.filter=this.filterString.trim().toLocaleLowerCase();
      // this.dataSource.filterPredicate=(data,filter)=>{
      //   return data.name.toLocaleLowerCase().includes(filter)
      // }
    }

}
