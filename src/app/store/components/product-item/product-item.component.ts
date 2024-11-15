import {Component, inject, Input} from '@angular/core';
import {Product} from '../../model/product.entity';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatChipsModule} from '@angular/material/chips';
import {NgForOf} from '@angular/common';
import {Router} from '@angular/router';
import {User} from '../../../IAM/model/user.entity';
import {UpdateUser} from '../../../IAM/model/update-user.entity';
import {UserApiService} from '../../../IAM/services/user-api.service';
import {MatSnackBar} from '@angular/material/snack-bar';


@Component({
  selector: 'app-product-item',
  standalone: true,
  imports: [
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatChipsModule,
    NgForOf
  ],
  templateUrl: './product-item.component.html',
  styleUrl: './product-item.component.scss'
})
export class ProductItemComponent {

  @Input() mainProduct!: Product;
  user!: User;
  private _snackBar = inject(MatSnackBar);

  constructor(private router: Router,
              private userApiService: UserApiService) {
  }


  ngOnInit() {

  }

  goToProductDetail(id: string) {
    this.router.navigate(['/products', id]);
  }

  addToFavorites(id: string) {
    let userJson = localStorage.getItem('user');
    if (userJson){
      this.user = JSON.parse(userJson);
    }
    else {
      this._snackBar.open('not logged in', 'Close' , {duration: 2000});
      return;
    }

    let userInfoToUpdate = new UpdateUser(
      this.user.firstName,
      this.user.lastName,
      this.user.email,
      this.user.password,
      this.user.address,
      id
    );

    this.userApiService.updateUser(userInfoToUpdate , this.user.userId).subscribe(
      (data : User) => {
        localStorage.setItem('user', JSON.stringify(data));

        if (!this.user.favoriteProducts.includes(id)){
          this._snackBar.open('Product added to favorites', 'Close' , {duration: 2000});
        }
        else {
          this._snackBar.open('Product already on favorites', 'Close' , {duration: 2000});
        }
      }
    )


  }
}
