import { Component, OnInit, } from '@angular/core';
import { Product } from '../product';
import { ProductService } from '../services/product.service';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
 product : Product;
  constructor(
    private productServices : ProductService,
    private activatedRoute : ActivatedRoute
  ) { }

  ngOnInit() {
    this.getProduct();
  }
getProduct(){
  this.route.prams.subscribe(param => Console.log(param));
  
}
}