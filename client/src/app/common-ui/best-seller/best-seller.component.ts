import { Component, Input } from '@angular/core';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { AsyncPipe, CommonModule, NgForOf } from '@angular/common';
import { RouterLink } from '@angular/router';
import { Observable } from 'rxjs';

import { IProduct } from '../../data/interfaces/product.interface';
import { ICarouselOptions } from './IBestSeller.interface';


@Component({
  selector: 'app-best-seller',
  standalone: true,
  imports: [
    NgForOf,
    AsyncPipe,
    CarouselModule,
    CommonModule,
    RouterLink
  ],
  templateUrl: './best-seller.component.html',
  styleUrl: './best-seller.component.scss'
})
export class BestSellerComponent {
  @Input() products$!: Observable<IProduct[]>;

  carouselOptions: ICarouselOptions = {
    items: 3,
    dots: false,
    nav: true,
    loop: true,
    margin: 5,
    responsive: {
      0: { items: 1 },
      400: { items: 2 },
      750: { items: 3 },
    },
    navText: [
      '<img src="../../../assets/img/svg/arrowLeft.svg" alt="prev" class="custom-arrow">',
      '<img src="../../../assets/img/svg/arrowRight.svg" alt="next" class="custom-arrow">'
    ]
  };

  trackById(index: number, product: IProduct): number {
    return product.id;
  }
}
