import { Injectable, signal, computed } from '@angular/core';
import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  // signal keeps every component that reads it in sync automatically
  private cartItems = signal<Product[]>([]);

  readonly items = this.cartItems.asReadonly();

  readonly totalCount = computed(() =>
    this.cartItems().reduce((sum, item) => sum + (item.qty ?? 1), 0)
  );

  readonly totalPrice = computed(() =>
    this.cartItems().reduce((sum, item) => sum + item.price * (item.qty ?? 1), 0)
  );

  addToCart(product: Product): void {
    const existing = this.cartItems().find(item => item.id === product.id);

    if (existing) {
      this.cartItems.update(items =>
        items.map(item =>
          item.id === product.id ? { ...item, qty: (item.qty ?? 1) + 1 } : item
        )
      );
    } else {
      this.cartItems.update(items => [...items, { ...product, qty: 1 }]);
    }
  }

  increment(productId: number): void {
    this.cartItems.update(items =>
      items.map(item =>
        item.id === productId ? { ...item, qty: (item.qty ?? 1) + 1 } : item
      )
    );
  }

  decrement(productId: number): void {
    this.cartItems.update(items =>
      items
        .map(item =>
          item.id === productId ? { ...item, qty: (item.qty ?? 1) - 1 } : item
        )
        .filter(item => (item.qty ?? 0) > 0)
    );
  }

  removeFromCart(productId: number): void {
    this.cartItems.update(items => items.filter(item => item.id !== productId));
  }

  clearCart(): void {
    this.cartItems.set([]);
  }
}
