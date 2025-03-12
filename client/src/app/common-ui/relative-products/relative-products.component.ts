import {AsyncPipe, NgForOf, NgIf, SlicePipe} from '@angular/common';
import {CarouselModule} from 'ngx-owl-carousel-o';
import {Component, Input} from '@angular/core';
import {RouterLink} from '@angular/router';
import {Observable, of} from 'rxjs';

import {IProduct} from '../../data/interfaces/product.interface';


@Component({
  selector: 'app-relative-products',
  standalone: true,
  imports: [
    AsyncPipe,
    CarouselModule,
    NgForOf,
    NgIf,
    RouterLink,
    SlicePipe
  ],
  templateUrl: './relative-products.component.html',
  styleUrl: './relative-products.component.scss'
})
export class RelativeProductsComponent {
  @Input() products: IProduct[] | [] = [];

  public products$: Observable<IProduct[]> = of([]);

  ngOnInit(): void {
    this.products$ = of(this.products);
  }

  trackById(index: number, product: IProduct): number {
    return product.id;
  }
}
