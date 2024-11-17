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
import {ProductApiService} from '../../../store/services/product-api.service';
import {User} from '../../../IAM/model/user.entity';
import {CreateOrder} from '../../model/create-order.entity';
import {OrderItem} from '../../../shared/model/order-item.entity';
import {OrderApiService} from '../../../shared/services/order-api.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-cart-page',
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
  templateUrl: './cart-page.component.html',
  styleUrl: './cart-page.component.scss'
})
export class CartPageComponent {
  cartItems !: any[];
  user!: User;

  constructor(private productApiService: ProductApiService,
              private orderApiService: OrderApiService,
              private router: Router) {
    this.cartItems = [];
  }

  ngOnInit() {

    let cart = localStorage.getItem('cart');
    if (cart) {
      this.cartItems = JSON.parse(cart);
    }

    let user = localStorage.getItem('user');
    if (user) {
      this.user = JSON.parse(user);
    }

  }


  removeFromCart(itemId: string) {
    this.cartItems = this.cartItems.filter(item => item.id !== itemId);
    localStorage.setItem('cart', JSON.stringify(this.cartItems));
  }

  getOrderTotalPrice(){

    let total = 0;
    this.cartItems.forEach(item => {
      total += item.price * item.quantity;
    });
    return total;
  }

  createOrder() {

    let orderItems = this.cartItems.map(item => {
      return new OrderItem(item.id, item.quantity);
    });

    let order = new CreateOrder(
      new Date(),
      this.user.userId,
      this.getOrderTotalPrice(),
      orderItems
    );

    this.orderApiService.createOrder(order).subscribe(
      (order) => {
        this.cartItems = [];
        localStorage.setItem('cart', JSON.stringify(this.cartItems));
        this.router.navigate(['/user', this.user.userId ]);
      }
    );

  }


}
