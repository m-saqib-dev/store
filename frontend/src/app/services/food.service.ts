import { Injectable } from '@angular/core';
import { Food } from '../shared/models/food';
import { sample_Tag, sample_food } from 'src/data';
import { Tags } from '../shared/models/tags';

@Injectable({
  providedIn: 'root'
})
export class FoodService {

  constructor() { }

  getAll():Food[]{
    return sample_food;
  }
  getFoodBySearchTerm(searchTerm:string = ""){
    return this.getAll().filter((food)=>food.name.toLowerCase().includes(searchTerm.toLowerCase()))
  }
  getFoodById(id:string):Food{  
    return this.getAll().find((food)=>food.id == id)??new Food();
  }
  getTags():Tags[]{
    return sample_Tag;
  }
  getFoodByTag(tag:string):Food[]{
    return tag=="All"? this.getAll():
     this.getAll().filter(food =>food.tags?.includes(tag))
  }
}
