import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-all-products',
  templateUrl: './all-products.component.html',
  styleUrls: ['./all-products.component.css']
})
export class AllProductsComponent implements OnInit{
 products:any = [];

  constructor(private api:ProductService,
              private cart: CartService
              ){}

  ngOnInit(){

    this.api.getAll().subscribe((data:any)=>{
      this.products = data;
      console.log(data)
    });

  }

  addToCart(product : any){
    this.cart.addToCart(product);
    alert("product added to cart");
  }

  
}
