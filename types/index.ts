export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  stock: number;
  unit: string;
  image: string;
  farmerId: string;
  farmer: {
    name: string;
    location: string;
  };
  category: string;
  createdAt: string;
  updatedAt: string;
}

export interface CartItem {
  productId: string;
  quantity: number;
  product: Product;
}

export interface User {
  id: string;
  email: string;
  name: string;
  role: 'farmer' | 'consumer' | 'admin';
  createdAt: string;
  updatedAt: string;
}

export interface Order {
  id: string;
  userId: string;
  items: CartItem[];
  total: number;
  status: 'pending' | 'processing' | 'shipped' | 'delivered' | 'cancelled';
  shippingAddress: {
    street: string;
    city: string;
    state: string;
    zipCode: string;
    country: string;
  };
  createdAt: string;
  updatedAt: string;
}

export interface FarmerProfile {
  id: string;
  userId: string;
  farmName: string;
  description: string;
  location: {
    street: string;
    city: string;
    state: string;
    zipCode: string;
    country: string;
  };
  products: Product[];
  rating: number;
  reviews: Review[];
  createdAt: string;
  updatedAt: string;
}

export interface Review {
  id: string;
  userId: string;
  farmerId: string;
  rating: number;
  comment: string;
  createdAt: string;
  updatedAt: string;
}