import {Component, Input} from '@angular/core';
import {Product} from '../../model/product.entity';
import {ProductItemComponent} from '../product-item/product-item.component';
import {NgForOf} from '@angular/common';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [
    ProductItemComponent,
    NgForOf
  ],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.scss'
})
export class ProductListComponent {

  @Input() products!: Product[];

  constructor() {
  }

}
