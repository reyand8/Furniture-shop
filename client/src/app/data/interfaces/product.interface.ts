export interface IProduct {
  id: number;
  name: string;
  description: string;
  price: number;
  discountPrice?: number;
  currency: string;
  images: string[];
  categoryId: number;
  type: 'FURNITURE' | 'DECOR' | 'ACCESSORIES';
  color: string;
  isBestSeller: boolean;
  sizes: string[];
}

export interface ProductResponse {
  products: IProduct[];
  totalPages: number;
}
