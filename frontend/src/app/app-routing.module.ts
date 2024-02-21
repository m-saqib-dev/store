import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/pages/home/home.component';
import { SearchResultComponent } from './components/pages/search-result/search-result.component';
import { ProductsComponent } from './components/pages/products/products.component';
import { CartComponent } from './components/pages/cart/cart.component';
import { LoginComponent } from './components/pages/login/login.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  { path: 'search/:searchTerm', component: SearchResultComponent },
  { path: 'food/:id', component: ProductsComponent },
  {path:'cart',component:CartComponent},
  {path:'tag/:tag',component:SearchResultComponent},
  {path:'login',component:LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
