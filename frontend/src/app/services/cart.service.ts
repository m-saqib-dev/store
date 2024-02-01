import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

interface Product {
  id: string;
  name: string;
  price: string;
  quantity: number;
}

@Injectable({
  providedIn: 'root'
})
export class CartService {

  private cartItems: Product[] = [];
  private cartItemsSubject = new BehaviorSubject<Product[]>(this.cartItems);
  cartItems$ = this.cartItemsSubject.asObservable();

  constructor() { }

  addToCart(product: Product) {
    
    const existingItem = this.cartItems.find(item => item.id === product.id);
    if (existingItem) {
      existingItem.quantity++;
    } else {
      this.cartItems.push({ ...product, quantity: 1 });
    }
    this.cartItemsSubject.next(this.cartItems);
  }

  // removeFromCart(id: number) {
  //   const index = this.cartItems.findIndex(item => item.id === id);
  //   if (index !== -1) {
  //     this.cartItems.splice(index, 1);
  //     this.cartItemsSubject.next(this.cartItems);
  //   }
  // }

  getCartItems(): Product[] {
    return this.cartItems.slice(); // Return a copy to avoid mutations
  }

  // getTotalPrice(): number {
  //   return this.cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
  // }
}
