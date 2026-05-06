import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  cartItems: any[] = [];
  total = 0;

  constructor(private cart: CartService) {}

  ngOnInit(): void {

    this.cart.getCartItems().subscribe((data: any[]) => {

      this.cartItems = data.map(item => ({
        ...item,
        quantity: item.quantity ? item.quantity : 1
      }));

      this.getTotal();

    });

  }

 increaseQty(item: any) {
  item.quantity++;
  this.getTotal();
  this.cart.updateCart(this.cartItems); // 🔥 save
}

decreaseQty(item: any) {
  if (item.quantity > 1) {
    item.quantity--;
    this.getTotal();
    this.cart.updateCart(this.cartItems); // 🔥 save
  }
}

    getTotal() {
    this.total = 0;

    this.cartItems.forEach(item => {
      this.total += item.price * item.quantity;
    });
  }

  removeItem(index: number) {
    this.cart.removeFromCart(index);
  }
}