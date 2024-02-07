import { CartComponent } from './components/pages/cart/cart.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/partials/header/header.component';
import { HomeComponent } from './components/pages/home/home.component';
import { StarRatingModule } from 'angular-star-rating';
import { FormsModule } from '@angular/forms';
import { SearchComponent } from './components/partials/search/search.component';
import { SearchResultComponent } from './components/pages/search-result/search-result.component';
import { CardComponent } from './components/partials/card/card.component';
import { ProductsComponent } from './components/pages/products/products.component';
import { NotFoundComponent } from './components/partials/not-found/not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    SearchComponent,
    SearchResultComponent,
    CardComponent,
    ProductsComponent,
    CartComponent,
    NotFoundComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    StarRatingModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
