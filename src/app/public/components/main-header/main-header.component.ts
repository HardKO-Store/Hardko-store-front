import { Component } from '@angular/core';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import { Router } from '@angular/router';
import {NgIf} from '@angular/common';
import {User} from '../../../IAM/model/user.entity';

@Component({
  selector: 'app-main-header',
  standalone: true,
  imports: [MatToolbarModule, MatButtonModule, MatIconModule, NgIf],
  templateUrl: './main-header.component.html',
  styleUrl: './main-header.component.scss'
})
export class MainHeaderComponent {

  protected user!: User;

  constructor(private router: Router) {}

  ngOnInit() {
    let response = localStorage.getItem('user');
    if (response) {
      this.user = JSON.parse(response);
    }
  }

  goToCart() {
    this.router.navigate(['/cart']);
  }

  goToHome() {
    this.router.navigate(['/home']);
  }

  goToUser() {
    this.router.navigate(['/user', this.user.userId]);
  }

  goToLogin() {
    this.router.navigate(['/login']);
  }
}
