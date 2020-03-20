import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { ProductListComponent } from './product-list/product-list.component';
import { SlideComponent } from './slide/slide.component';
import { CategoryComponent } from './category/category.component';
import { ProductComponent } from './product/product.component';
import { ProductManagerComponent } from './product-manager/product-manager.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { AddProductComponent } from './add-product/add-product.component';
import { ProductService } from './services/product.service';
@NgModule({
  // declarations: [
  //   AppComponent,
  //   SlideComponent,
  //   CategoryComponent,
  //   ProductListComponent,
  //   ProductComponent,
  //   ProductDetailComponent,
  //   AddProductComponent,
  //   AboutComponent
  // ],
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, HelloComponent, ProductListComponent, SlideComponent, CategoryComponent, ProductComponent, ProductManagerComponent, ProductDetailComponent, AddProductComponent ],
  bootstrap:    [ AppComponent ],
  providers: [ProductService]
  
})

export class AppModule { }
