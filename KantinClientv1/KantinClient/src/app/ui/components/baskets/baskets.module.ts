import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BasketsComponent } from './baskets.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';


const routes:Routes=[
  {
    path:'',component:BasketsComponent
  }
]

@NgModule({
  declarations: [
    BasketsComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FormsModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule
  ],schemas:[
    CUSTOM_ELEMENTS_SCHEMA
  ],exports:[
    BasketsComponent
  ]
})
export class BasketsModule { }
