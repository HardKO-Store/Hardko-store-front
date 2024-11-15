import { Injectable } from '@angular/core';
import {BaseService} from '../../shared/services/base.service';
import {Observable} from 'rxjs';
import {Order} from '../model/order.entity';

@Injectable({
  providedIn: 'root'
})
export class OrderApiService extends BaseService<Order>{

  resourceEndpoint: string = '/orders';

  getOrdersByUserId(userId: string): Observable<Order[]> {
    return this.http.get<Order[]>(`${this.baseUrl}${this.resourceEndpoint}/user/${userId}`, this.httpOptions);
  }

}
