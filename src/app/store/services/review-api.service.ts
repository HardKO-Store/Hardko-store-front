import { Injectable } from '@angular/core';
import {BaseService} from '../../shared/services/base.service';
import {Review} from '../model/review.entity';
import {catchError, Observable, retry} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ReviewApiService extends BaseService<Review>{
  resourceEndpoint: string = '/reviews';

  getReviewsByProductId(productId: string) : Observable<Review[]>{
    return this.http.get<Review[]>(`${this.baseUrl}${this.resourceEndpoint}/product/${productId}`, this.httpOptions)
      .pipe(retry(2), catchError(this.handleError));
  }

}
