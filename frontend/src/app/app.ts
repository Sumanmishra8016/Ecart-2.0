import { Component, signal } from '@angular/core';
import { HeaderComponent } from './components/header/header';
import { FooterComponent } from './components/footer/footer';
import { RouterOutlet } from '@angular/router';
import { ProductListComponent } from './components/product-list/product-list';
import { CartComponent } from './components/cart/cart';
@Component({
  selector: 'app-root',
  imports: [HeaderComponent, FooterComponent, RouterOutlet, ProductListComponent, CartComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('Ecart');
}
