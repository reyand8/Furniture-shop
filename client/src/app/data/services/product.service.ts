import { inject, Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http'
import { Observable } from 'rxjs';

import { environment } from '../../../environment/environment';
import {IProduct, ProductResponse} from '../interfaces/product.interface';


@Injectable({
  providedIn: 'root'
})
export class ProductService {
  http: HttpClient = inject(HttpClient)
  baseApiUrl: string = environment.baseApiUrl;

  getProducts(
    category?: string,
    minPrice?: number,
    maxPrice?: number,
    page: number = 1,
    pageSize: number = 10): Observable<ProductResponse> {
    let params: HttpParams = new HttpParams()
      .set('page', page)
      .set('pageSize', pageSize);

    if (category) params = params.set('category', category);
    if (minPrice !== undefined) params = params.set('minPrice', minPrice);
    if (maxPrice !== undefined) params = params.set('maxPrice', maxPrice);

    return this.http.get<ProductResponse>(`${this.baseApiUrl}catalog/products`, { params });
  }

  getBestSellerProducts(): Observable<IProduct[]> {
    return this.http.get<IProduct[]>(`${this.baseApiUrl}catalog/top-products`)
  }

  getRelativeProducts(type: any): Observable<IProduct[]> {
    return this.http.get<IProduct[]>(`${this.baseApiUrl}catalog/relative-products`, {
      params: type
    });
  }

  getProductById(productId: string): Observable<IProduct> {
    return this.http.get<IProduct>(`${this.baseApiUrl}catalog/product/${productId}`)
  }

}
