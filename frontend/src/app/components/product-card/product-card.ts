import { Component, inject, Input, Output, EventEmitter, OnChanges, SimpleChanges } from '@angular/core';
import { Product } from '../../models/product.model';
import { CartService } from '../../services/cart.service';
import { CurrencyPipe } from '@angular/common';

@Component({
  imports: [CurrencyPipe],
  selector: 'app-product-card',
  templateUrl: './product-card.html',
  styleUrls: ['./product-card.css']
})
export class ProductCardComponent implements OnChanges {
  @Input() product!: Product;
  @Output() add = new EventEmitter<number>();

  private cartService = inject(CartService);
  justAdded = false;

  formattedPrice: string = '';

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['product'] && this.product) {
      this.formattedPrice = `$${Number(this.product.price).toFixed(2)}`;
    }
  }

  // onAddToCart(): void {
  //   this.add.emit(this.product.id);
  // }
  onAddToCart(): void {
    this.cartService.addToCart(this.product);
    this.justAdded = true;
    setTimeout(() => (this.justAdded = false), 900);
  }
}