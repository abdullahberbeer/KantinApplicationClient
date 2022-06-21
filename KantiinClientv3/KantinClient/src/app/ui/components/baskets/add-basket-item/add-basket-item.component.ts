import { AfterContentInit, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { AddBasketItemDto } from 'src/app/_dto/basketDto/addBasketItem.model';
import { CategoryListDto } from 'src/app/_dto/categoryDto/categoryListDto.model';
import { PersonListDto } from 'src/app/_dto/personDto/personListDto.model';
import { ProductListDto } from 'src/app/_dto/productDto/productListDto.model';
import { Basket } from 'src/app/_models/basket.model';
import { Category } from 'src/app/_models/category.model';
import { Person } from 'src/app/_models/person.model';
import { Product } from 'src/app/_models/product.model';
import { BasketService } from 'src/app/_services/basket.service';
import { CategoryService } from 'src/app/_services/category.service';
import { PersonService } from 'src/app/_services/person.service';
import { ProductService } from 'src/app/_services/product.service';

@Component({
  selector: 'app-add-basket-item',
  templateUrl: './add-basket-item.component.html',
  styleUrls: ['./add-basket-item.component.css']
})
export class AddBasketItemComponent implements OnInit,AfterContentInit {

  // categoriesListDto:CategoryListDto[]=[{
  //   id:0,
  //   name:'',
  //   description:'',
  //   products:[{
  //     id:0,
  //     name:'',
  //     price:0,
  //     stock:0,
  //     categoryId:0

  //   }]
  // }]
 basket:Basket;
  categoriesListDto:any=[];
 productListDto:ProductListDto[]=[];
  persons:PersonListDto[]=[];
  addBasketItem:any  = {
    personId:0,
    productId:0,
    quantity:0
  }


  constructor(private basketService:BasketService,private personService:PersonService,private categoryService:CategoryService,private productService: ProductService, private toastr: ToastrService, private spinnerService: NgxSpinnerService, private router: Router) { }

  ngOnInit(): void {
this.getCategories();
this.getPersons();

  }

  ngAfterContentInit(): void {
    console.log(this.addBasketItem.personId)
console.log(this.addBasketItem.productId)
console.log(this.addBasketItem.quantity)
  }

  getCategories(){
    this.categoryService.getCategories().subscribe((success)=>{
      this.categoriesListDto=success;
    },(err) => {

      this.toastr.error(err);
    })
  }

  getProductsbyCategory(){

    this.productService.getProductbyCategory(this.categoriesListDto.id).subscribe((success)=>{
      this.productListDto=success;
    },(err) => {

      this.toastr.error(err);
    })
  }
  getPersons(){
    this.personService.getPersons().subscribe((success)=>{
      this.persons=success;
    },(err) => {

      this.toastr.error(err);
    })
  }
  addBasket() {
    this.spinnerService.show();

//     console.log(this.addBasketItem)
// return;
    this.basketService.addBasketItem(this.addBasketItem).subscribe((success) => {
      this.addBasketItem=success;
      this.toastr.success("Ekleme işlemi başarılı..");
      this.spinnerService.hide();

      this.router.navigate(['/products']);

    }, (err) => {
      this.spinnerService.hide();
      this.toastr.error(err);
    })
  }
}
