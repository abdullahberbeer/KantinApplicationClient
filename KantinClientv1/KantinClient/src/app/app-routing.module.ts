import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { BasketsComponent } from './ui/components/baskets/baskets.component';
import { CategoriesComponent } from './ui/components/categories/categories.component';
import { HomeComponent } from './ui/components/home/home.component';
import { OrdersComponent } from './ui/components/orders/orders.component';
import { PersonsComponent } from './ui/components/persons/persons.component';
import { ProductsComponent } from './ui/components/products/products.component';

import { LayoutComponent } from './ui/layout/layout.component';

const routes: Routes = [
  {
    path:'',component:LayoutComponent,children:[
      {
        path:'',component:HomeComponent,loadChildren:()=> import('./ui/components/home/home.module').then(m=>m.HomeModule)
      },
      {
        path:'products',component:ProductsComponent,loadChildren:()=> import('./ui/components/products/products.module').then(m=>m.ProductsModule)
      },
      {
        path:'categories',component:CategoriesComponent,loadChildren:()=> import('./ui/components/categories/categories.module').then(m=>m.CategoriesModule)
      },
      {
        path:'baskets',component:BasketsComponent,loadChildren:()=> import('./ui/components/baskets/baskets.module').then(m=>m.BasketsModule)
      },
      {
        path:'orders',component:OrdersComponent,loadChildren:()=> import('./ui/components/orders/orders.module').then(m=>m.OrdersModule)
      },
      {
        path:'persons',component:PersonsComponent,loadChildren:()=> import('./ui/components/persons/persons.module').then(m=>m.PersonsModule
          )
      }

    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{preloadingStrategy:PreloadAllModules})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
