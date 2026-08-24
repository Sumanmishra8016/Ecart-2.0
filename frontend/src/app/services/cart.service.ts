import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { Product, CartItem } from '../models/product.model';

@Injectable({ providedIn: 'root' })
export class CartService {
  private baseUrl = 'http://localhost:5000/api';
  private cartSubject = new BehaviorSubject<CartItem[]>([]);
  public cart$ = this.cartSubject.asObservable();

  constructor(private http: HttpClient) {}

  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(`${this.baseUrl}/products`);
  }

  fetchCart(): void {
    this.http.get<CartItem[]>(`${this.baseUrl}/cart`).subscribe((items) => {
      this.cartSubject.next(items);
    });
  }

  addToCart(productId: number): void {
    this.http.post(`${this.baseUrl}/cart`, { productId }).subscribe(() => {
      this.fetchCart();
    });
  }

  removeFromCart(cartId: number): void {
    this.http.delete(`${this.baseUrl}/cart/${cartId}`).subscribe(() => {
      this.fetchCart();
    });
  }
}