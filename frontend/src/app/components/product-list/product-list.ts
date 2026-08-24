import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { Product } from '../../models/product.model';
import { CartService } from '../../services/cart.service';
import { ProductCardComponent } from '../product-card/product-card';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.html',
  imports: [ProductCardComponent, CommonModule],
  styleUrls: ['./product-list.css']
})
export class ProductListComponent implements OnInit, OnDestroy {
  products: Product[] = [];
  private sub!: Subscription;

  constructor(private cartService: CartService) {}

  ngOnInit(): void {
    this.sub = this.cartService.getProducts().subscribe((data) => {
      this.products = data;
    });
  }

  onAdd(productId: number): void {
    this.cartService.addToCart(productId);
  }

  ngOnDestroy(): void {
    if (this.sub) {
      this.sub.unsubscribe();
    }
  }
}
