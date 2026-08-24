export interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
  image_url: string;
}

export interface CartItem {
  cart_id: number;
  product_id: number;
  name: string;
  price: number;
  image_url: string;
  quantity: number;
}