import { Injectable } from '@angular/core';
import {BaseService} from '../../shared/services/base.service';
import {Product} from '../model/product.entity';
import {catchError, Observable, retry} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductApiService extends BaseService<Product>{
  resourceEndpoint: string = '/products';

  /**
   * Fetches all products from the API.
   * @returns An observable of an array of `Product` objects.
   */
  getAllProducts(){
    return this.http.get<Product[]>(`${this.baseUrl}${this.resourceEndpoint}`, this.httpOptions)
      .pipe(retry(2), catchError(this.handleError));
  }

  /**
   * Gets a single product by its ID.
   * @param id The ID of the product to fetch.
   * @returns An observable of a `Product` object.
   */
  getProductById(id: string): Observable<Product>{
    return this.http.get<Product>(`${this.baseUrl}${this.resourceEndpoint}/${id}`, this.httpOptions)
      .pipe(retry(2), catchError(this.handleError));
  }

}
