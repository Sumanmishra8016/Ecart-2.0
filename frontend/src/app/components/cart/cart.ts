import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { CartItem } from '../../models/product.model';
import { CartService } from '../../services/cart.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.html',
  imports: [CommonModule],
  styleUrls: ['./cart.css']
})
export class CartComponent implements OnInit, OnDestroy {
  items: CartItem[] = [];
  totalPrice = 0;
  private sub!: Subscription;

  constructor(private cartService: CartService) {}

  ngOnInit(): void {
    this.cartService.fetchCart();
    this.sub = this.cartService.cart$.subscribe((data) => {
      this.items = data;
      this.calculateTotal();
    });
  }

  calculateTotal(): void {
    this.totalPrice = this.items.reduce((sum, item) => sum + item.price * item.quantity, 0);
  }

  removeItem(id: number): void {
    this.cartService.removeFromCart(id);
  }

  ngOnDestroy(): void {
    if (this.sub) {
      this.sub.unsubscribe();
    }
  }
}
