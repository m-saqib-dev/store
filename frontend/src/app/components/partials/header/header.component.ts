import { CartService } from 'src/app/services/cart.service';
import { Component, OnChanges, SimpleChange, SimpleChanges } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  isNavbarExpanded = false;
  isProfileDropdownOpen = false
  isLoggedIn:boolean=false;
  badge:number=0;
  constructor(private authService:AuthService,private cartService:CartService){
    this.isLoggedIn=authService.isLogged()
    this.badge=cartService.getCartItems().length
  }
  
  toggleNavbar() {
    this.isNavbarExpanded = !this.isNavbarExpanded;
  }
  toggleProfileDropdown() {
    this.isProfileDropdownOpen = !this.isProfileDropdownOpen;
  }
}
