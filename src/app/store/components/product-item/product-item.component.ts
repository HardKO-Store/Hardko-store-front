import {Component, Input} from '@angular/core';
import {Product} from '../../model/product.entity';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatChipsModule} from '@angular/material/chips';
import {NgForOf} from '@angular/common';
import {Router} from '@angular/router';


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

  constructor(private router: Router) {
  }


  ngOnInit() {

  }

  goToProductDetail(id: string) {
    this.router.navigate(['/products', id]);
  }
}
