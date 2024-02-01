import { Food } from 'src/app/shared/models/food';
import { FoodService } from './../../../services/food.service';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-search-result',
  templateUrl: './search-result.component.html',
  styleUrls: ['./search-result.component.scss']
})
export class SearchResultComponent {
  foods!:Food[]
  constructor(private foodService:FoodService,activatedRoute:ActivatedRoute){
    activatedRoute.params.subscribe((params)=>{
      if (params['searchTerm']){
        this.foods=foodService.getFoodBySearchTerm(params['searchTerm'])
      }
    else{
      this.foods=foodService.getAll()
    }
    })
  }
}
