import { catchError, Observable, of, switchMap } from 'rxjs';
import { Component, inject, OnInit } from '@angular/core';
import {AsyncPipe, NgForOf, NgIf} from '@angular/common';
import {ActivatedRoute, ParamMap} from '@angular/router';

import { RelativeProductsComponent } from '../../common-ui/relative-products/relative-products.component';
import { ProductService } from '../../data/services/product.service';
import { IProduct } from '../../data/interfaces/product.interface';

@Component({
  selector: 'app-item',
  standalone: true,
  imports: [
    AsyncPipe,
    NgIf,
    NgForOf,
    RelativeProductsComponent
  ],
  templateUrl: './item.component.html',
  styleUrl: './item.component.scss'
})
export class ItemComponent implements OnInit {
  private route: ActivatedRoute = inject(ActivatedRoute);
  private productService: ProductService = inject(ProductService);

  public product$: Observable<IProduct | null> = of(null);
  public relatedProducts$: Observable<IProduct[]> = of([]);

  public mainImageIndex: number = 0;
  public errorMessage: string | null = null;

  constructor() {}

  ngOnInit(): void {
    this.product$ = this.route.paramMap.pipe(
      switchMap((params: ParamMap) => {
        const productId: string | null = params.get('id');
        if (!productId) {
          this.errorMessage = 'Unknown id';
          return of(null);
        }
        return this.productService.getProductById(productId).pipe(
          catchError(error => {
            this.errorMessage = 'Get data error';
            return of(null);
          })
        );
      })
    );

    this.relatedProducts$ = this.product$.pipe(
      switchMap((product: IProduct | null) => {
        if (product && product.type) {
          return this.productService.getRelativeProducts({ type: product.type }).pipe(
            catchError(() => of([]))
          );
        }
        return of([]);
      })
    );
  }

  setMainImage(index: number): void {
    this.mainImageIndex = index;
  }
}

