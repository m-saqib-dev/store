import { FoodService } from './../../../services/food.service';
import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CartService } from 'src/app/services/cart.service';
import { Food } from 'src/app/shared/models/food';

interface Product {
  id: string;
  name: string;
  price: string;
  quantity: number;
}
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnChanges {
  food:Food[]=[];
  foodId!:string;
  qt:number=1;
  product!:Product
  constructor(private cartService: CartService,activatedRoute:ActivatedRoute,private router:Router,foodService:FoodService){
    activatedRoute.params.subscribe((params)=>{
      if(params['id']) 
      {

        this.food=foodService.getFoodById(params['id'])
        this.product={id:this.food[0].id,name:this.food[0].name,price:this.food[0].price,quantity:this.qt}
      }
    })
  }
  ngOnChanges(changes:SimpleChanges){
    
  }
  
  onPlus(){
    this.qt++
  }
  onMinu(){
    if (this.qt > 1) {
      this.qt--
    }
  }
  addToCart(){
    this.cartService.addToCart(this.product)
    
  }
  
}
