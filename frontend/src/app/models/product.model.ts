export interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
  image: string;
  qty?: number; // Optional property to track quantity in the cart
}

export interface CartItem {
  cart_id: number;
  product_id: number;
  name: string;
  price: number;
  image: string;
  quantity: number;
}