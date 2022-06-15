import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './ui/components/home/home.component';
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
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
