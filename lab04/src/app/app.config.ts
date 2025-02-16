//import { importProvidersFrom } from '@angular/core';
//import { BrowserModule } from '@angular/platform-browser';
import { ProductsComponent } from './components/products/products.component';
import { AppComponent } from './app.component';

export const appConfig = {
  // providers: [
  //   importProvidersFrom(BrowserModule),
  // ],
  declarations: [
    AppComponent,
    ProductsComponent,  // Подключаем ProductsComponent
  ],
};
