import { Component } from '@angular/core';
import {ProductItemComponent} from '../../components/product-item/product-item.component';
import {ProductsApiService} from '../../services/products-api.service';
import {Product} from '../../model/product.entity';
import {ProductListComponent} from '../../components/product-list/product-list.component';

@Component({
  selector: 'app-home-dashboard',
  standalone: true,
  imports: [
    ProductItemComponent,
    ProductListComponent
  ],
  templateUrl: './home-dashboard.component.html',
  styleUrl: './home-dashboard.component.scss'
})
export class HomeDashboardComponent {

  products : Product[] = [];

  constructor(private productsApiService: ProductsApiService) {}

  ngOnInit() {
    this.productsApiService.getAllProducts().subscribe((products : Product[]) => {
      this.products = products;
      console.log(this.products);
    });
  }

}
