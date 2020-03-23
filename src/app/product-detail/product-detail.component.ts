import { Component, OnInit, Input } from '@angular/core';
import { Product } from '../product';
import { ProductService } from '../services/product.service';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
@Input('data') product : Product;
  constructor(
    private productServices : ProductService,
    private activaterRoute : ActivatedRoute
  ) { }

  ngOnInit() {
    this.getProduct();
  }
getProduct(){
  this.activaterRoute.params.subscribe(param =>{
    this.product = this.productServices.getProduct(param.id);
  });
}
}