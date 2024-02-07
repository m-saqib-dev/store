import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-not-found',
  templateUrl: './not-found.component.html',
  styleUrls: ['./not-found.component.scss']
})
export class NotFoundComponent {
  @Input()reset="/";
  @Input()title="page not found";
  @Input()btnTxt="go back";
}
