import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeModule } from './home/home.module';
import { ProductsModule } from './products/products.module';




@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HomeModule,
    ProductsModule
  ],exports:[
    HomeModule,
    ProductsModule
  ]
})
export class ComponentsModule { }
