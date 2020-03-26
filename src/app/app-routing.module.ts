import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { AddProductComponent } from "./add-product/add-product.component";
import { AboutComponent } from "./about/about.component";
import { ProductListComponent } from "./product-list/product-list.component";
import { HomeComponent } from "./home/home.component";
import { ProductManagerComponent } from "./product-manager/product-manager.component";
import { ProductDetailComponent } from "./product-detail/product-detail.component";

const routes: Routes = [
  { path: "home", component: HomeComponent },
  { path: "product", component: ProductManagerComponent },
  { path: "product/product:id", component: ProductDetailComponent},
  { path: "add-product", component: AddProductComponent },
  { path: "about", component: AboutComponent },
  { path: "product-manager", component: ProductManagerComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
