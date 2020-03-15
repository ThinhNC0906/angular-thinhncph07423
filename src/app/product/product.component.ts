import { Component, OnInit } from '@angular/core';
import {product } from '../product';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  onClickMe = event =>{
    this.name ="Event Binding";
  }
  product: product ={

  name:  "Item 1",
  price:  24.99,
  desc:  "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquam aspernatur!",
  status:  "false"
  
  }
  
}