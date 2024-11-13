import { Injectable } from '@angular/core';
import {environment} from '../../../environments/environment';
import {HttpClient, HttpErrorResponse, HttpHeaders} from '@angular/common/http';
import {throwError} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BaseService {
  basePath: string = `${environment.serverBasePath}`;

  httpOptions = {
    headers: new HttpHeaders({
      'Content-type': 'application/json',
    })
  }

  constructor(protected http: HttpClient) { }

  handleError(error: HttpErrorResponse) {
    // Default error handling
    if (error.error instanceof ErrorEvent) {
      console.log(`An error occurred ${error.error.message}`);
    } else {
      // Unsuccessful Response Error Code returned from Backend
      console.log(`Backend returned code ${error.status}, body was ${error.error}`);
    }
    return throwError(() => new Error('Something happened with request, please try again later'));
  }

}
