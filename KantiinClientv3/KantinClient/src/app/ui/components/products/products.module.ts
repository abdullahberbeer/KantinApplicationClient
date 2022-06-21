import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsComponent } from './products.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { ProductAddModule } from './product-add/product-add.module';
import { ProductUpdateModule } from './product-update/product-update.module';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';


const routes:Routes=[
  {path:'',component:ProductsComponent}
]

@NgModule({
  declarations: [
    ProductsComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FormsModule,
    MatTableModule,
    MatPaginatorModule,
    MatButtonModule,
    MatSortModule,
    ProductAddModule,
    ProductUpdateModule,
    MatIconModule


  ], schemas :[
    CUSTOM_ELEMENTS_SCHEMA
  ],exports:[
    ProductsComponent
  ]
})
export class ProductsModule { }
