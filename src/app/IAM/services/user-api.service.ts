import { Injectable } from '@angular/core';
import {BaseService} from '../../shared/services/base.service';
import {User} from '../model/user.entity';
import {Observable} from 'rxjs';
import {UpdateUser} from '../model/update-user.entity';
import {ReducedProduct} from '../model/reduced-product.entity';
import {CreateUser} from '../model/create-user.entity';

@Injectable({
  providedIn: 'root'
})
export class UserApiService extends BaseService<User>{

  resourceEndpoint: string = '/users';

  /*
  *
  * Fetches a user by their ID.
  * @param user The user object to create.
  * @returns An observable of the created user object.
  * */
  getUserById(id: string): Observable<User> {
    return this.http.get<User>(`${this.baseUrl}${this.resourceEndpoint}/${id}`, this.httpOptions);
  }


  updateUser(userInfo: UpdateUser, userId: string): Observable<User> {
    return this.http.put<User>(`${this.baseUrl}${this.resourceEndpoint}/${userId}`, userInfo, this.httpOptions);
  }

  getUserFavoriteProducts(userId: string): Observable<ReducedProduct[]> {
    return this.http.get<ReducedProduct[]>(`${this.baseUrl}${this.resourceEndpoint}/${userId}/favorites`, this.httpOptions);
  }

  deleteUser(userId: string): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}${this.resourceEndpoint}/${userId}`, this.httpOptions);
  }

  createUser(user: CreateUser): Observable<User>{
    return this.http.post<User>(`${this.baseUrl}${this.resourceEndpoint}`, user, this.httpOptions);
  }


}
