import { Component } from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatDividerModule} from '@angular/material/divider';
import {MatChip, MatChipSet} from '@angular/material/chips';
import {NgForOf, NgIf} from '@angular/common';
import {MatIconModule} from '@angular/material/icon';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import {FormsModule} from '@angular/forms';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {User} from '../../model/user.entity';
import {UserApiService} from '../../services/user-api.service';
import {OrderApiService} from '../../services/order-api.service';
import {ReviewApiService} from '../../../shared/services/review-api.service';
import {Order} from '../../model/order.entity';
import {ReducedProduct} from '../../model/reduced-product.entity';
import {Review} from '../../../store/model/review.entity';

@Component({
  selector: 'app-user-dashboard',
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
  templateUrl: './user-dashboard.component.html',
  styleUrl: './user-dashboard.component.scss'
})
export class UserDashboardComponent {
  user!: User;
  orders!: Order[];
  favoriteProducts!: ReducedProduct[];
  reviews!: Review[];

  constructor(private userApiService: UserApiService,
              private orderApiService: OrderApiService,
              private reviewApiService: ReviewApiService) {
  }


  ngOnInit() {
    let userJson = localStorage.getItem('user');
    if (userJson){
      this.user = JSON.parse(userJson);
    }
    else {
      console.log('No user found in local storage');
    }

    this.orderApiService.getOrdersByUserId(this.user.userId).subscribe(
      orders => {
        console.log('Orders for user: ');
        console.log(orders);
        this.orders = orders;
      }
    );

    this.userApiService.getUserFavoriteProducts(this.user.userId).subscribe(
      favoriteProducts => {
        console.log('Favorite products for user: ');
        console.log(favoriteProducts);
        this.favoriteProducts = favoriteProducts;
      }
    );

    this.reviewApiService.getReviewsByUserId(this.user.userId).subscribe(
      reviews => {
        console.log('Reviews for user: ');
        console.log(reviews);
        this.reviews = reviews;
      }
    );



  }
}
