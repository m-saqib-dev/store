import { Component } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';
interface Product {
  id: string;
  name: string;
  price: string;
  quantity: number;
}
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent {
  cartItems!:Product
  constructor(private cartService:CartService){
    this.cartItems = cartService.getCartItems()[0];
  }
  click(){
    console.log(this.cartItems)
    console.log("")
  }
}
