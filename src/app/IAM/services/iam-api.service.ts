import { Injectable } from '@angular/core';
import {BaseService} from '../../shared/services/base.service';
import {Login} from '../model/login.entity';
import {User} from '../model/user.entity';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class IamApiService extends BaseService<Login>{

  resourceEndpoint: string = '/users';


  userLogin(login: Login): Observable<User>{
    return this.http.post<User>(`${this.baseUrl}${this.resourceEndpoint}/login`, login, this.httpOptions);
  }

  userRegistration(user: User): Observable<User>{
    return this.http.post<User>(`${this.baseUrl}${this.resourceEndpoint}`, user, this.httpOptions);
  }

}
