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
  food!:Food
  qt:number=1;
  constructor(private cartService: CartService,activatedRoute:ActivatedRoute,private router:Router,foodService:FoodService){
    activatedRoute.params.subscribe((params)=>{
      if(params['id']) 
        this.food=foodService.getFoodById(params['id'])
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
    this.cartService.addToCart(this.food)
    this.cartService.changeQunatity(this.food.id,this.qt)
  }
}
