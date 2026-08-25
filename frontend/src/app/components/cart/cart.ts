import { Component, OnInit, OnDestroy, inject } from '@angular/core';
import { Subscription } from 'rxjs';
import { CartItem } from '../../models/product.model';
import { CartService } from '../../services/cart.service';
import { CommonModule } from '@angular/common';
import { CurrencyPipe } from '@angular/common';

@Component({
  imports: [CommonModule, CurrencyPipe],
  selector: 'app-cart',
  templateUrl: './cart.html',
  styleUrls: ['./cart.css']
})
// export class CartComponent implements OnInit, OnDestroy {
//   items: CartItem[] = [];
//   totalPrice = 0;
//   private sub!: Subscription;

//   constructor(private cartService: CartService) {}

//   ngOnInit(): void {
//     this.cartService.fetchCart();
//     this.sub = this.cartService.cart$.subscribe((data) => {
//       this.items = data;
//       this.calculateTotal();
//     });
//   }

//   calculateTotal(): void {
//     this.totalPrice = this.items.reduce((sum, item) => sum + item.price * item.quantity, 0);
//   }

//   removeItem(id: number): void {
//     this.cartService.removeFromCart(id);
//   }

//   ngOnDestroy(): void {
//     if (this.sub) {
//       this.sub.unsubscribe();
//     }
//   }
// }
export class CartComponent {
  private cartService = inject(CartService);

  items = this.cartService.items;
  totalPrice = this.cartService.totalPrice;
  totalCount = this.cartService.totalCount;

  increment(id: number): void {
    this.cartService.increment(id);
  }

  decrement(id: number): void {
    this.cartService.decrement(id);
  }

  remove(id: number): void {
    this.cartService.removeFromCart(id);
  }
}
