import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { User } from '../../modelo/User';
import 'rxjs/add/operator/map';
import { of } from 'rxjs/observable/of';
import { USERS } from '../../../environments/mocks/mock-users';

@Injectable()
export class LoginService {

  constructor(private http: HttpClient) { }

/*
  getUsers(): Observable<User[]> {
    return of (USERS);
  }
  */
}
