import { Component } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';
import { Cart } from 'src/app/shared/models/cart';
import { Food } from 'src/app/shared/models/food';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent {
  cartItems!:Cart
  constructor(private cartService:CartService){
    cartService.getCartObservable()
    .subscribe(item=>this.cartItems=item)
  }
  click(){
    console.log(this.cartItems)
    console.log("")
  }
  removeFromCart(id:string){
    this.cartService.removeFromCart(id)
  }
}
