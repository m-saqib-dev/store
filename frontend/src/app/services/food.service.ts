import { Injectable } from '@angular/core';
import { Food } from '../shared/models/food';
import { sample_food } from 'src/data';

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

}
