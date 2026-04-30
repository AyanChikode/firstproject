import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-all-products',
  templateUrl: './all-products.component.html',
  styleUrls: ['./all-products.component.css']
})
export class AllProductsComponent implements OnInit{
 products:any = [];

  constructor(private api:ProductService){}

  ngOnInit(){

    this.api.getAll().subscribe((data:any)=>{
      this.products = data;
      console.log(data)
    });

  }
}
