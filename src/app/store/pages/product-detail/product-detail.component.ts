import {Component, inject} from '@angular/core';
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
import {MatSnackBar} from '@angular/material/snack-bar';
import {FormsModule} from '@angular/forms';
import {User} from '../../../IAM/model/user.entity';
import {ReviewCreateEntity} from '../../model/review-create.entity';
import {MatButtonToggleModule} from '@angular/material/button-toggle';

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
    MatSelectModule,
    FormsModule,
    MatButtonToggleModule
  ],
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.scss'
})
export class ProductDetailComponent {

  product!: Product;
  reviews!: Review[];
  private _snackBar = inject(MatSnackBar);

  title!: string ;
  comment!: string ;
  rating!: number ;

  user!: User;

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

  onCreateReview(){

    if (!this.title || !this.comment || !this.rating){
      this._snackBar.open('Please fill all fields!', 'Close', {
        duration: 2000,
      });
      return;
    }

    let userJson = localStorage.getItem('user');
    if (userJson){
      this.user = JSON.parse(userJson);
    }

    let reviewToCreate = new ReviewCreateEntity(
      this.product.id,
      this.user.userId,
      this.rating,
      this.title,
      this.comment
    );

    this.reviewApiService.createReview(reviewToCreate).subscribe(
      data => {
        this.reviews.push(data);
        this._snackBar.open('Review created!', 'Close', {
          duration: 2000,
        });
      },
      error => {
        console.log(error);
      }
    );



  }

  onLikeReview(id: string){

    let userJson = localStorage.getItem('user');
    if (userJson){
      this.user = JSON.parse(userJson);
    }

    this.reviewApiService.addLikeToReview(this.user.userId, id).subscribe(
      data => {
        console.log(data);
        let reviewIndex = this.reviews.findIndex(review => review.id === id);
        this.reviews[reviewIndex].likes = data.likes;
        this._snackBar.open('Review liked!', 'Close', {
          duration: 2000,
        });

      },
      error => {
        console.log(error);
      }
    );


  }

  onDislikeReview(id: string) {
    let userJson = localStorage.getItem('user');
    if (userJson){
      this.user = JSON.parse(userJson);
    }

    this.reviewApiService.removeLikeToReview(this.user.userId, id).subscribe(
      data => {
        console.log(data);
        let reviewIndex = this.reviews.findIndex(review => review.id === id);
        this.reviews[reviewIndex].likes = data.likes;
        this._snackBar.open('Review DISliked!', 'Close', {
          duration: 2000,
        });

      },
      error => {
        console.log(error);
      }
    );

  }
}
