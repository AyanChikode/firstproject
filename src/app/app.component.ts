import { Component, OnInit } from '@angular/core';
import { CartService } from './cart.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'firstproject';
   
  count = 0;
  constructor(private cart: CartService){}

  ngOnInit(){

    this.cart.cart$.subscribe(data=>{
      this.count = data.length;
    })
    
  }
}
