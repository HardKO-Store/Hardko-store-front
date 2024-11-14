import { Component } from '@angular/core';
import {Product} from '../../model/product.entity';
import {ProductApiService} from '../../services/product-api.service';
import {ActivatedRoute} from '@angular/router';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatDividerModule} from '@angular/material/divider';
import {MatChip, MatChipSet} from '@angular/material/chips';
import {NgForOf, NgIf} from '@angular/common';
import {Review} from '../../model/review.entity';
import {ReviewApiService} from '../../services/review-api.service';
import {MatIconModule} from '@angular/material/icon';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';

@Component({
  selector: 'app-product-detail',
  standalone: true,
  imports: [
    MatCardModule,
    MatButtonModule,
    MatDividerModule,
    MatChip,
    MatChipSet,
    NgForOf,
    NgIf,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule
  ],
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.scss'
})
export class ProductDetailComponent {

  product!: Product;
  reviews!: Review[];

  constructor(private productApiService: ProductApiService,
              private route: ActivatedRoute,
              private reviewApiService: ReviewApiService) {
  }

  ngOnInit() {
    let productId = this.route.snapshot.paramMap.get('id');
    if (productId) {
      this.productApiService.getProductById(productId).subscribe(
        data => {
          this.product = data;
          console.log(this.product);
        },
        error => {
          console.log(error);
        }
      );

      this.reviewApiService.getReviewsByProductId(productId).subscribe(
        data => {
          this.reviews = data;
          console.log(this.reviews);
        },
        error => {
          console.log(error);
        }
      );
    }
  }

}
