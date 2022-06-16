import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeModule } from './home/home.module';
import { ProductsModule } from './products/products.module';
import { CategoriesModule } from './categories/categories.module';
import { BasketsModule } from './baskets/baskets.module';
import { OrdersModule } from './orders/orders.module';
import { PersonsModule } from './persons/persons.module';





@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    BasketsModule,
    HomeModule,
    OrdersModule,
    ProductsModule,
    PersonsModule,
    CategoriesModule

  ],exports:[
    BasketsModule,
    HomeModule,
    OrdersModule,
    ProductsModule,
    PersonsModule,
    CategoriesModule

  ]
})
export class ComponentsModule { }
