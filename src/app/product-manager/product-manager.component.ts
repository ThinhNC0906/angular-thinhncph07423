import { Component, OnInit } from '@angular/core';
// import { data } from '../MockData';
import { Product } from '../Product';
import { ProductService } from '../services/product.service'
@Component({
  selector: 'app-product-manager',
  templateUrl: './product-manager.component.html',
  styleUrls: ['./product-manager.component.css']
})
export class ProductManagerComponent implements OnInit {
products: Product[];
  constructor(
    private productService: ProductService
  ) { }

  ngOnInit(): void {
    this.products = this.productService.getProducts();
  }
//  products = data;
//   selected: Product;
//   showDetail(product){
//     this.selected = product;
//   }
  removeItem(id){
     this.products = this.productService.removeProduct(id);
  //   return this.products = this.products.filter(product => product.id != id);
  }
}