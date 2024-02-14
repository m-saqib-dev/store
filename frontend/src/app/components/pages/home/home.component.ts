import { Tags } from 'src/app/shared/models/tags';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from './../../../services/auth.service';
import { FoodService } from './../../../services/food.service';
import { Component } from '@angular/core';
import { Food } from 'src/app/shared/models/food';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  foods:Food[]=[]
  isLoggedIn=true;
  tags:Tags[]=[]
  constructor(private foodService:FoodService,private authService:AuthService,activatedRoute:ActivatedRoute){
    
    activatedRoute.params.subscribe((params)=>{
      
      if (params['searchTerm']){
        this.foods=foodService.getFoodBySearchTerm(params['searchTerm'])
      }
    else{
     
      this.foods=foodService.getAll()
    }
    })
    
    this.isLoggedIn=authService.isLogged()
  }
  
}
