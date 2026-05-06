import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  private cartItems = new BehaviorSubject<any[]>(this.loadCart());
  cart$ = this.cartItems.asObservable();

  constructor() {}

  // 🔹 Load from localStorage
  private loadCart(): any[] {
    const data = localStorage.getItem('cart');
    return data ? JSON.parse(data) : [];
  }

  // 🔹 Save to localStorage
  private saveCart(items: any[]) {
    localStorage.setItem('cart', JSON.stringify(items));
  }

addToCart(product: any) {
  const items = this.cartItems.value;
  const existing = items.find(i => i.id === product.id);

  if (existing) {
    existing.quantity++;
  } else {
    items.push({ ...product, quantity: 1 });
  }

  this.cartItems.next([...items]);
  this.saveCart(items);
}

  removeFromCart(index: number) {
    const items = [...this.cartItems.value];
    items.splice(index, 1);

    this.cartItems.next(items);
    this.saveCart(items);   // 🔥 save
  }

  updateCart(items: any[]) {
    this.cartItems.next(items);
    this.saveCart(items);
  }

  getCartItems() {
    return this.cart$;
  }

  getCartCount() {
    return this.cartItems.value.length;
  }
}