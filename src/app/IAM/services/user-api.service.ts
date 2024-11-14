import { Injectable } from '@angular/core';
import {BaseService} from '../../shared/services/base.service';
import {User} from '../model/user.entity';
import {Observable} from 'rxjs';

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


}
