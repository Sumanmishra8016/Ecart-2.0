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
// export class ProductListComponent implements OnInit, OnDestroy {
//   products: Product[] = [];
//   private sub!: Subscription;

//   constructor(private cartService: CartService) {}

//   ngOnInit(): void {
//     this.sub = this.cartService.getProducts().subscribe((data) => {
//       this.products = data;
//     });
//   }

//   onAdd(productId: number): void {
//     this.cartService.addToCart(productId);
//   }

//   ngOnDestroy(): void {
//     if (this.sub) {
//       this.sub.unsubscribe();
//     }
//   }
// }

export class ProductListComponent {
  // replace with an HTTP call to your real product API when ready
  products: Product[] = [
    {
      id: 1,
      name: 'Wireless Headphones',
      description: 'Noise-canceling over-ear headphones',
      price: 1999.99,
      image: 'https://plus.unsplash.com/premium_photo-1679513691474-73102089c117?q=80&w=1113&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    },
    {
      id: 2,
      name: 'Smart Watch',
      description: 'Fitness tracking smartwatch',
      price: 1199.49,
      image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&h=300&q=80'
    },
    {
      id: 3,
      name: 'Mechanical Keyboard',
      description: 'RGB tactile mechanical keyboard',
      price: 2585.0,
      image: 'https://media.istockphoto.com/id/1980026198/photo/mechanical-custom-keyboard-on-a-wooden-table.jpg?s=2048x2048&w=is&k=20&c=qS8NqT2MYm12GgaaZbO2bxVQPaGrrzArOowCaNeiZUI='
    },
    {
      id: 4,
      name: 'Portable Speaker',
      description: 'Waterproof bluetooth speaker',
      price: 16059.99,
      image: 'https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cG9ydGFibGUlMjBzcGVha2VyfGVufDB8fDB8fHww'  
    },
    {
      id: 5,
      name: 'Smart TV',
      description: '55-inch 4K Ultra HD Smart TV',
      price: 33499.99,
      image: 'https://images.unsplash.com/photo-1461151304267-38535e780c79?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8c21hcnQlMjB0dnxlbnwwfHwwfHx8MA%3D%3D'
    },
    {
      id: 6,
      name: 'smart Phone',
      description: 'Latest model smartphone',
      price: 80699.99,
      image: 'https://images.unsplash.com/photo-1580910051074-3eb694886505?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8c21hcnQlMjBwaG9uZXxlbnwwfHwwfHx8MA%3D%3D'
    },
    {
      id: 7,
      name: 'laptop',
      description: 'High-performance laptop for work and play',
      price: 65999.99,
      image: 'https://images.unsplash.com/photo-1663354027456-ce6a7e07d212?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8aHAlMjBsYXB0b3B8ZW58MHx8MHx8fDA%3D'
    },
    {
      id: 8,
      name: 'VR Headset',
      description: 'Immersive virtual reality headset',
      price: 12990.99,
      image: 'https://images.unsplash.com/photo-1622979135225-d2ba269cf1ac?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8dnIlMjBoZWFkc2V0fGVufDB8fDB8fHww'  
    }
  ];
}
