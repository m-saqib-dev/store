import { Tags } from 'src/app/shared/models/tags';
import { FoodService } from './../../../services/food.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-tag',
  templateUrl: './tag.component.html',
  styleUrls: ['./tag.component.scss']
})
export class TagComponent {
  tags?:Tags[]
  constructor(private foodService:FoodService){
    this.tags = this.foodService.getTags()
}
}
