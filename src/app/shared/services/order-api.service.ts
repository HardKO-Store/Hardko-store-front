import { Injectable } from '@angular/core';
import {BaseService} from './base.service';
import {Observable} from 'rxjs';
import {Order} from '../model/order.entity';
import {CreateOrder} from '../../cart/model/create-order.entity';

@Injectable({
  providedIn: 'root'
})
export class OrderApiService extends BaseService<Order>{

  resourceEndpoint: string = '/orders';

  getOrdersByUserId(userId: string): Observable<Order[]> {
    return this.http.get<Order[]>(`${this.baseUrl}${this.resourceEndpoint}/user/${userId}`, this.httpOptions);
  }

  cancerOrder(orderId: string): Observable<any> {
    return this.http.put<any>(`${this.baseUrl}${this.resourceEndpoint}/${orderId}/cancel`, this.httpOptions);
  }

  createOrder(orderToCreate: CreateOrder): Observable<Order> {
    return this.http.post<Order>(`${this.baseUrl}${this.resourceEndpoint}`, orderToCreate, this.httpOptions);
  }

}
