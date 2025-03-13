import { Component, inject, OnInit, OnDestroy } from '@angular/core';
import { Subject, debounceTime, takeUntil } from 'rxjs';
import { FormsModule } from '@angular/forms';
import { NgForOf } from '@angular/common';

import { ProductListItemComponent } from '../../common-ui/product-list-item/product-list-item.component';
import { ICategory, IProduct, IProductResponse } from '../../data/interfaces/product.interface';
import { ProductService } from '../../data/services/product.service';
import {RouterLink} from "@angular/router";


@Component({
  selector: 'app-shop',
  standalone: true,
  imports: [
    NgForOf,
    ProductListItemComponent,
    FormsModule,
    RouterLink
  ],
  templateUrl: './shop.component.html',
  styleUrl: './shop.component.scss'
})
export class ShopComponent implements OnInit, OnDestroy {
  private productService: ProductService = inject(ProductService);
  private destroy$: Subject<void> = new Subject<void>();

  categories: ICategory[] = [];
  products: IProduct[] = [];

  selectedCategory: string = "";
  minPrice?: number;
  maxPrice?: number;

  currentPage: number = 1;
  totalPages: number = 1;
  pageSize: number = 10;


  private filterChanges$: Subject<{minPrice?: number; maxPrice?: number }> =
    new Subject<{ minPrice?: number; maxPrice?: number }>();

  ngOnInit(): void {
    this.loadCategories();
    this.loadProducts();

    this.filterChanges$.pipe(
      debounceTime(900),
      takeUntil(this.destroy$)
    ).subscribe((): void => {
      this.applyFilters();
    });
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  loadProducts(): void {
    this.productService.getProducts(
      this.selectedCategory,
      this.minPrice,
      this.maxPrice,
      this.currentPage,
      this.pageSize
    ).subscribe((response: IProductResponse): void => {
      this.products = response.products;
      this.totalPages = response.totalPages;
    });
  }

  loadCategories(): void {
    this.productService.getCategories().subscribe((categories: ICategory[]): void => {
      this.categories = categories;
    });
  }

  applyFilters(): void {
    this.currentPage = 1;
    this.loadProducts();
  }

  onFilterChange(): void {
    this.minPrice = this.minPrice ? this.minPrice : undefined;
    this.maxPrice = this.maxPrice ? this.maxPrice : undefined;
    this.filterChanges$.next({ minPrice: this.minPrice, maxPrice: this.maxPrice });
  }

  nextPage(): void {
    if (this.currentPage < this.totalPages) {
      this.currentPage++;
      this.loadProducts();
    }
  }

  prevPage(): void {
    if (this.currentPage > 1) {
      this.currentPage--;
      this.loadProducts();
    }
  }
}
