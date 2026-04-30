import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-info',
  templateUrl: './product-info.component.html',
  styleUrls: ['./product-info.component.css']
})
export class ProductInfoComponent implements OnInit {

  product: any = {};

  constructor(
    private api: ProductService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {

  let id = this.route.snapshot.paramMap.get('id');

  if(id){
    this.api.getById(id).subscribe((data:any)=>{
      this.product = data;
    });
  }

}

}