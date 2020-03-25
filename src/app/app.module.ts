import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";

import { AppComponent } from "./app.component";
import { HelloComponent } from "./hello.component";
import { ProductListComponent } from "./product-list/product-list.component";
import { SlideComponent } from "./slide/slide.component";
import { CategoryComponent } from "./category/category.component";
import { ProductComponent } from "./product/product.component";
import { ProductManagerComponent } from "./product-manager/product-manager.component";
import { ProductDetailComponent } from "./product-detail/product-detail.component";
import { AddProductComponent } from "./add-product/add-product.component";
import { ProductService } from "./services/product.service";
import { AppRoutingModule } from "./app-routing.module";
import { AboutComponent } from "./about/about.component";
import { HomeComponent } from "./home/home.component";
import { NotFoundComponent } from "./not-found/not-found.component";
@NgModule({
  imports: [BrowserModule, FormsModule, AppRoutingModule, HttpClientModule],
  declarations: [
    AppComponent,
    HelloComponent,
    ProductListComponent,
    SlideComponent,
    CategoryComponent,
    ProductComponent,
    ProductManagerComponent,
    ProductDetailComponent,
    AddProductComponent,
    AboutComponent,
    HomeComponent,
    NotFoundComponent
  ],
  bootstrap: [AppComponent],
  providers: [ProductService]
})
export class AppModule {}
