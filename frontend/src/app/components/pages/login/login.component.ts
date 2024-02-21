import { Location } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  standalone:true,
})
export class LoginComponent {
  constructor(private location: Location) {}

  goBack(): void {
    this.location.back();
  }
}
