import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Cart } from '../shared/models/cart';
import { Food } from '../shared/models/food';
import { CartItem } from '../shared/models/cartItems';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cart:Cart = this.getCartFromLocalStorage();
  private cartSubject:BehaviorSubject<Cart> = new BehaviorSubject(this.cart);
  
  str:string="string"
  constructor(){}
  addToCart(food:Food):void{
    let cartItem = this.cart.items.find(item=>item.food.id === food.id)
    if(cartItem)
    return;
  this.cart.items.push(new CartItem(food))
    this.setCartToLocalStorage();
}
  removeFromCart(foodId:string) :void{
    this.cart.items = this.cart.items.filter(item=> item.food.id != foodId);
    this.setCartToLocalStorage();
  }
  changeQunatity(foodId:string,quantity:number){
    let cartItem = this.cart.items.find(item => item.food.id === foodId)
    if(!cartItem) return;

    cartItem.quantity = quantity;
    cartItem.price = cartItem.price * quantity
    this.setCartToLocalStorage();
  }

  clearCart(){
    this.cart = new Cart();
    this.setCartToLocalStorage();
  }

  getCartObservable():Observable<Cart>{
    return this.cartSubject.asObservable();

  }

  private setCartToLocalStorage():void {
    this.cart.totalPrice = this.cart.items.reduce((prevSum,currentItem) => prevSum + currentItem.price, 0);
    this.cart.totalCount = this.cart.items.reduce((prevSum,currentItem)=> prevSum + currentItem.quantity, 0);

    const carJson = JSON.stringify(this.cart);
    localStorage.setItem('Cart',carJson);
    this.cartSubject.next(this.cart);
  }

  private getCartFromLocalStorage():Cart{
    const cartJson = localStorage.getItem('Cart');
    return cartJson? JSON.parse(cartJson): new Cart();
  }
  
}
