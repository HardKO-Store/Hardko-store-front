import {Component, inject} from '@angular/core';
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
import {OrderApiService} from '../../../shared/services/order-api.service';
import {ReviewApiService} from '../../../shared/services/review-api.service';
import {Order} from '../../../shared/model/order.entity';
import {ReducedProduct} from '../../model/reduced-product.entity';
import {Review} from '../../../store/model/review.entity';
import {MatTableModule} from '@angular/material/table';
import {Router} from '@angular/router';
import {MatSnackBar} from '@angular/material/snack-bar';

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
    MatButtonToggleModule,
    MatTableModule
  ],
  templateUrl: './user-dashboard.component.html',
  styleUrl: './user-dashboard.component.scss'
})
export class UserDashboardComponent {
  user!: User;
  orders!: Order[];
  favoriteProducts!: ReducedProduct[];
  reviews!: Review[];

  private _snackBar = inject(MatSnackBar);

  orderColumns: string[] = ['ID', 'OrderDate', 'Status', 'TotalAmount','Actions'];


  constructor(private userApiService: UserApiService,
              private orderApiService: OrderApiService,
              private reviewApiService: ReviewApiService,
              private router: Router) {
  }


  ngOnInit() {
    let userJson = localStorage.getItem('user');
    if (userJson){
      this.user = JSON.parse(userJson);
    }
    else {

      this.router.navigate(['/login']);
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

  toProductDetail(productId: string) {
    this.router.navigate(['/products', productId]);
  }

  logOut(){
    localStorage.removeItem('user');
    this.router.navigate(['/login']);
  }

  cancelOrder(id: string) {
    this.orderApiService.cancerOrder(id).subscribe(
    );
    window.location.reload();
  }


  toRedableDate(stringDate: string) {
    let date = new Date(stringDate);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });

  }


}
