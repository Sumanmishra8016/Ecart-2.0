import { Component, Input, Output, EventEmitter, OnChanges, SimpleChanges } from '@angular/core';
import { Product } from '../../models/product.model';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.html',
  styleUrls: ['./product-card.css']
})
export class ProductCardComponent implements OnChanges {
  @Input() product!: Product;
  @Output() add = new EventEmitter<number>();

  formattedPrice: string = '';

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['product'] && this.product) {
      this.formattedPrice = `$${Number(this.product.price).toFixed(2)}`;
    }
  }

  onAddToCart(): void {
    this.add.emit(this.product.id);
  }
}