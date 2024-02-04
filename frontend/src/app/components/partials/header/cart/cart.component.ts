import { Component } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';
import { Food } from 'src/app/shared/models/food';
interface Product {
  food:Food;
  price: number;
  quantity: number;
}
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent {
  cartItems:Product[]=[]
  constructor(private cartService:CartService){
    cartService.getCartObservable().subscribe(item=>this.cartItems=item.items)
    console.log(this.cartItems)
  }
  click(){
    console.log(this.cartItems)
    console.log("")
  }
}
