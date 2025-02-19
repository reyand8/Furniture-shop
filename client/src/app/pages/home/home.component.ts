import { Component, inject } from '@angular/core';
import { AsyncPipe, NgForOf, NgIf } from '@angular/common';
import { catchError, Observable, of } from 'rxjs';

import { ChooseOurDesignComponent } from '../../common-ui/choose-our-design/choose-our-design.component';
import { BestSellerComponent } from '../../common-ui/best-seller/best-seller.component';
import { ChooseUsComponent } from '../../common-ui/choose-us/choose-us.component';
import { ProductService } from '../../data/services/product.service';
import { HeroComponent } from '../../common-ui/hero/hero.component';
import { IProduct } from '../../data/interfaces/product.interface';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    AsyncPipe, NgForOf, NgIf, HeroComponent, ChooseUsComponent,
    ChooseOurDesignComponent, BestSellerComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  private productService: ProductService = inject(ProductService);

  bestSellerProducts$: Observable<IProduct[]> = this.productService.getBestSellerProducts().pipe(
    catchError(error => {
      console.error('Error fetching best seller products:', error.message);
      return of([]);
    })
  );
}
