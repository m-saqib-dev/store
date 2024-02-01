import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Food } from 'src/app/shared/models/food';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {
  @Input() data!:Food
  
  constructor(activatedRoute:ActivatedRoute,private router:Router){
      
  }
  

  // navigateById(){
  //   this.router.navigateByUrl('/foods/'+this.data.id)
  // }
  
}
