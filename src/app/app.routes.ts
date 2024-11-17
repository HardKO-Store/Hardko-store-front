import { Routes } from '@angular/router';
import {HomeDashboardComponent} from './store/pages/home-dashboard/home-dashboard.component';
import {ProductDetailComponent} from './store/pages/product-detail/product-detail.component';
import {LoginPageComponent} from './IAM/pages/login-page/login-page.component';
import {CartPageComponent} from './cart/pages/cart-page/cart-page.component';
import {UserDashboardComponent} from './IAM/pages/user-dashboard/user-dashboard.component';
import {RegisterAccountComponent} from './IAM/pages/register-account/register-account.component';

export const routes: Routes = [
  {
    path: 'home',
    component: HomeDashboardComponent
  },
  {
    path: '',
    redirectTo: () => '/login',
    pathMatch: 'full'
  },
  {
    path: 'products/:id',
    component: ProductDetailComponent
  },
  {
    path: 'login',
    component: LoginPageComponent
  },
  {
    path: 'cart',
    component: CartPageComponent
  },
  {
    path: 'user/:id',
    component: UserDashboardComponent
  },
  {
    path: 'register',
    component: RegisterAccountComponent
  }
];
