import { Injectable } from '@angular/core';
import {BaseService} from './base.service';
import {Review} from '../../store/model/review.entity';
import {catchError, Observable, retry} from 'rxjs';
import {ReviewCreateEntity} from '../../store/model/review-create.entity';

@Injectable({
  providedIn: 'root'
})
export class ReviewApiService extends BaseService<Review>{
  resourceEndpoint: string = '/reviews';

  getReviewsByProductId(productId: string) : Observable<Review[]>{
    return this.http.get<Review[]>(`${this.baseUrl}${this.resourceEndpoint}/product/${productId}`, this.httpOptions)
      .pipe(retry(2), catchError(this.handleError));
  }

  /*
  * Create a review for a product
  * @param review: ReviewCreateEntity
  * @return Observable<Review>
  * */
  createReview(review: ReviewCreateEntity) : Observable<Review>{
    return this.http.post<Review>(`${this.baseUrl}${this.resourceEndpoint}`, review, this.httpOptions)
      .pipe(retry(2), catchError(this.handleError));
  }

  addLikeToReview(userId: string, reviewId: string) : Observable<any>{
    return this.http.put(`${this.baseUrl}${this.resourceEndpoint}/${reviewId}/like`, {"userId": userId}, this.httpOptions)
      .pipe(retry(2), catchError(this.handleError));
  }

  removeLikeToReview(userId: string, reviewId: string) : Observable<any>{
    return this.http.put(`${this.baseUrl}${this.resourceEndpoint}/${reviewId}/unlike`, {"userId": userId}, this.httpOptions)
      .pipe(retry(2), catchError(this.handleError));
  }

  getReviewsByUserId(userId: string) : Observable<Review[]>{
    return this.http.get<Review[]>(`${this.baseUrl}${this.resourceEndpoint}/user/${userId}`, this.httpOptions)
      .pipe(retry(2), catchError(this.handleError));
  }


}
